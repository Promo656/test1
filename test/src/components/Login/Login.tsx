import {Container, Grid, Paper} from "@material-ui/core";
import {LoginReduxForm} from "../form/LoginForm";
import React from "react";

export function Login() {
    const onsubmit = (data: any) => {
        console.log(data)
    }

    return <Container fixed>
        <Grid item>
            <Paper style={{padding: "10px"}}>
                <LoginReduxForm onSubmit={onsubmit}/>
            </Paper>
        </Grid>
    </Container>
}