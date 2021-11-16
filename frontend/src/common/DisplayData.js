import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { Typography } from "@material-ui/core";

export default function DisplayData(props) {
  const rows = props.rows || []

  return (
    <React.Fragment>
      <Typography variant="h3" component="h3">
        Data
      </Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>UserId</TableCell>
            <TableCell>ID</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Body</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          
          {rows && (rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.userId}</TableCell>
              <TableCell>{row.id}</TableCell>
              <TableCell className="text">{row.title}</TableCell>
              <TableCell className="text">{row.body}</TableCell>
            </TableRow>
          )))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
