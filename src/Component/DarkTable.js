import Table from "react-bootstrap/Table";
import pic1 from "../Component/assets/profile.jpeg";
import pic2 from "../Component/assets/1.jpeg";
import pic3 from "../Component/assets/2.jpeg";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

function DarkTable() {
  return (
    <Table  variant="dark" style={{ marginTop: "19px", backgroundColor: "blue" }}>
      <tbody>
        <tr >
          <td style={{color:'grey'}}>01</td>
          <td>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Stack direction="row" spacing={2} style={{ marginRight: "5px" }}>
                <Avatar alt="Remy Sharp" src={pic1} />
              </Stack>{" "}
              Mark
            </div>
          </td>
          <td style={{color:'grey'}}>1580 km</td>
        </tr>
        <tr>
          <td style={{color:'grey'}}>02</td>
          <td>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Stack direction="row" spacing={2} style={{ marginRight: "5px" }}>
                <Avatar alt="Remy Sharp" src={pic2} />
              </Stack>{" "}
              joe
            </div>
          </td>
          <td style={{color:'grey'}}>1679 km</td>
        </tr>
        <tr>
          <td style={{color:'grey'}}>03</td>
          <td>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Stack direction="row" spacing={2} style={{ marginRight: "5px" }}>
                <Avatar alt="Remy Sharp" src={pic3} />
              </Stack>{" "}
              lucy
            </div>
          </td>
          <td style={{color:'grey'}}>876 km</td>
        </tr>
       
      </tbody>
    </Table>
  );
}

export default DarkTable;
