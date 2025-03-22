import React from "react";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AdminPanel = () => {
  const navigate = useNavigate();
  return (
    <IconButton onClick={() => navigate("/admin")}>
      <AdminPanelSettingsIcon />
    </IconButton>
  );
};

export default AdminPanel;
