"use client";
import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import axios from "axios";

interface Room {
  id: number;
  img_path: string;
  name: string;
  detail: string;
  building_name: string;
  floor_number: number;
  people: number;
  type: string;
  status: string;
  wifi_ssid: string;
  wifi_pass: string;
  amenities: [];
}

export function TableDemo() {
  const [room, setRoom] = useState<[Room] | []>([]);

  const getRoom = async () => {
    try {
      const res = await axios.get(
        "https://meeting.taisolution.tech/backend/api/v1/room",
        {
          headers: {
            Authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywidXNlcklkIjoiVEFJLTAwMDAiLCJuYW1lIjoicm9vdCIsImV4cCI6MTc0MTYyMzY0OX0.4Ywj8wF8nIRD9vjlALiCf8T2x9NjRrN6kiRzvRr0ALw",
          },
        }
      );
      setRoom(res.data.data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    getRoom()
  },[])

  return (
    <Table>
      <TableCaption>Meeting Room</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead></TableHead>
          <TableHead>name</TableHead>
          <TableHead className=" w-6">detail</TableHead>
          <TableHead>building</TableHead>
          <TableHead>floor</TableHead>
          <TableHead>people</TableHead>
          <TableHead>type</TableHead>
          <TableHead>status</TableHead>
          <TableHead>wifi</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {room.map((invoice) => (
          <TableRow key={invoice.id}>
            <TableCell>
              <div className="relative w-20 h-20 rounded-md">
                <img
                  src={`https://meeting.taisolution.tech/backend/api/v1/static/${invoice.img_path}`}
                  alt={invoice.name}
                  className="w-full h-full object-contain"
                />
              </div>
            </TableCell>
            <TableCell>{invoice.name}</TableCell>
            <TableCell className=" w-6">{invoice.detail}</TableCell>
            <TableCell>{invoice.building_name}</TableCell>
            <TableCell>{invoice.floor_number}</TableCell>
            <TableCell>{invoice.people}</TableCell>
            <TableCell>{invoice.type}</TableCell>
            <TableCell>{invoice.status}</TableCell>
            <TableCell>
              <p>ssid:{invoice.wifi_ssid}</p>
              <p>pass:{invoice.wifi_pass}</p>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter></TableFooter>
    </Table>
  );
}
