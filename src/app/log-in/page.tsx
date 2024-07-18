
"use client";

import { trener } from "@/constants";
import { RoutesPath } from "@/constants/RoutesPath";
import { texts } from "@/constants/pl/common";
import { Login } from "@/core/types/form/types";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import _ from "lodash";
// import { signIn, useSession } from "next-auth/react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Login>();

  const router = useRouter();
  const [error, setError] = useState<boolean>(false);
  const onSubmit: SubmitHandler<Login> = async ({ email, password }: Login) => {
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
      callbackUrl: `http://test.shirt.smartwear.click/`,
    });
    res?.status !== 200 && setError(true);
  };

  const { data: session } = useSession();

  useEffect(() => {
    if (!session) {
      console.log("niezalogowano")
      return
    } else {
      console.log("zalogowano")
      if (session.user.last_name === trener) {
        router.push(RoutesPath.PROFILE_TRAINER);
      } else router.push(RoutesPath.PROFILE_USER);
    }
  }, [session]);

  return (
    <Container component="main" maxWidth="xs" className="py-12">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
        <Typography component="h1" variant="h5">
          {_.capitalize(texts.zaloguj_sie)}
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              {error && (
                <Typography variant="body2" className="text-red-500">
                  {_.capitalize(texts.niepoprawnyEmailLubHaslo)}
                </Typography>
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label={_.capitalize(texts.adres_email)}
                {...register("email", {
                  required: "Proszę podać prawidłowy adres email",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Nieprawidłowy adres email",
                  },
                })}
                error={Boolean(errors.email)}
                helperText={errors.email?.message}
                className="bg-white"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                {...register("password", { required: "Proszę podać hasło" })}
                label={_.capitalize(texts.haslo)}
                type="password"
                id="password"
                error={Boolean(errors.password)}
                helperText={errors.password?.message}
                className="bg-white"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            className="bg-midnight"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {texts.zaloguj_sie}
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link
                href={RoutesPath.REGISTRATION}
                variant="body1"
                className="text-gray-600"
              >
                {texts.nie_masz_konta}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
