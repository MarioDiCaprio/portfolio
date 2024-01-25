"use client"

import React from "react";
import {Table, TableBody, TableCell, TableColumn, TableHeader, TableRow} from "@nextui-org/react";

const PersonalInfoTable: React.FC = () => (
    <Table hideHeader>
        <TableHeader>
            <TableColumn>Detail</TableColumn>
            <TableColumn>Info</TableColumn>
        </TableHeader>
        <TableBody>

            <TableRow key="name">
                <TableCell>Name</TableCell>
                <TableCell>Mario Di Caprio</TableCell>
            </TableRow>

            <TableRow key="anschrift">
                <TableCell>Anschrift</TableCell>
                <TableCell>Schülinstraße 13/1, 89073 Ulm</TableCell>
            </TableRow>

            <TableRow key="telefon">
                <TableCell>Telefon</TableCell>
                <TableCell>+49 176 31711648</TableCell>
            </TableRow>

            <TableRow key="email">
                <TableCell>Email</TableCell>
                <TableCell>mariodicaprio10@gmail.com</TableCell>
            </TableRow>

        </TableBody>
    </Table>
)

export default PersonalInfoTable