import { AppBar, Toolbar, Typography } from "@mui/material"
import { Link } from "react-router-dom"

export default function Header() {
    return (
        <AppBar sx={ {position: 'fixed', zIndex: '10'} }>
            <Toolbar>
                <Link to={'/'}>
                    <Typography variant="h6" component="div" sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', flexGrow: 1, color: 'white' }}>
                        <img src="xuiter-logo.png" />
                        Xuiter
                    </Typography>
                </Link>
            </Toolbar>
        </AppBar>
    )
}