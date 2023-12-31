import { CalendarMonth, FormatListBulleted, SportsSoccer } from "@mui/icons-material"
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material"
import { useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom"

function TabsFooter() {

  const navigate = useNavigate()
  const location = useLocation()

  return (
    <Paper sx={{  position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation
        showLabels
        sx={{ span: { color: 'black' }, svg: { fontSize: 32, color: "#e3d005" } }}
      >
        
        <BottomNavigationAction sx={{ backgroundColor: location.pathname === '/jogos-do-dia' ? '#b6c6cb' : '' }} onClick={() => navigate('/jogos-do-dia')} label="Jogos" icon={<SportsSoccer />} />
        <BottomNavigationAction sx={{ backgroundColor: location.pathname === '/calendario' ? '#b6c6cb' : '' }} onClick={() => navigate('/calendario')} label="Calendário" icon={<CalendarMonth />} />
        <BottomNavigationAction sx={{ backgroundColor: location.pathname === '/grupos' ? '#b6c6cb' : '' }} onClick={() => navigate('/grupos')} label="Grupos" icon={<FormatListBulleted />} />
      </BottomNavigation>
    </Paper>
  )
}

export default TabsFooter