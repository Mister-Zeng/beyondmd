import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Column, ExerciseType } from "./type";
import { Link } from "react-router-dom";

const columns: readonly Column[] = [
  { id: "name", label: "Exercise Name", minWidth: 90 },
  { id: "exercise_type", label: "Exercise Type", minWidth: 90 },
  { id: "muscle", label: "Muscle Type", minWidth: 90 },
  { id: "difficulty", label: "Difficulty Level", minWidth: 100 },
  { id: "instructions", label: "Instructions", minWidth: 90 },
];

export default function ExerciseTable({
  exerciseList,
}: {
  exerciseList: ExerciseType[];
}) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage: (event: unknown, newPage: number) => void = (
    event: unknown,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "90%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 550 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {exerciseList
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.map((column) => {
                      const value: string =
                        column.id === "instructions"
                          ? `${row[column.id].slice(0, 300)} ....`
                          : row[column.id];

                      return (
                        <TableCell key={column.id} align={column.align}>
                          <Link
                            to={`exercise/${row["id"]}`}
                            state={{
                              exerciseName: row["name"],
                              exerciseType: row["exercise_type"],
                              muscleType: row["muscle"],
                              difficultyLevel: row["difficulty"],
                              instructions: row["instructions"],
                              id: row["id"],
                            }}
                            style={{
                              textDecoration: "none",
                              color: "black",
                            }}
                          >
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </Link>
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={exerciseList.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
