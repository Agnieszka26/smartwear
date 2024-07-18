"use client";
import { registration } from "@/apiHandlers/registration";
import successImage from "@/assets/images/registrationAndLogin/Email campaign-amico.svg";
import errorImage from "@/assets/images/registrationAndLogin/errorImage.svg";
import BaseModal from "@/attoms/baseModal/BaseModal";
import { ModalContent } from "@/attoms/modalContent/ModalContent";
import { RoutesPath } from "@/constants/RoutesPath";
import { texts } from "@/constants/pl/common";
import { Registration } from "@/core/types/form/types";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { AxiosError, AxiosResponse } from "axios";
import _ from "lodash";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";



const Registration = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Registration>();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();
  const onSubmit: SubmitHandler<Registration> = async (data) => {
    try {
      const { data: registerData }: AxiosResponse = await registration(data);
      setSuccess(texts.sprawdz_swoja_poczte);
    } catch (error) {
      const err = error as AxiosError;

      setError(err.message);
    }
  };

  return (
    <Container component="main" maxWidth="xs" className="md:pb-12">
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
          {_.capitalize(texts.zarejestruj_sie)}
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          sx={{ mt: 3 }}
        >
          <BaseModal
            open={Boolean(error)}
            handleClose={() => {
              setError(""), router.push(RoutesPath.HOME);
            }}
          >
            <ModalContent
              message={texts.sprawdz_swoje_dane + error}
              title={texts.wystapil_blad}
              image={errorImage}
            />
          </BaseModal>
          <BaseModal open={Boolean(success)} handleClose={() => setSuccess("")}>
            <ModalContent
              message={success}
              title={texts.dziekujemy_za_rejestracje}
              image={successImage}
            />
          </BaseModal>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                className="bg-white"
                autoComplete="given-name"
                required
                fullWidth
                id="firstName"
                label={_.capitalize(texts.imie)}
                autoFocus
                {...register("first_name")}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                className="bg-white"
                required
                fullWidth
                id="lastName"
                label={_.capitalize(texts.nazwisko)}
                autoComplete="family-name"
                {...register("last_name")}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className="bg-white"
                required
                fullWidth
                id="nickname"
                label={_.capitalize(texts.nickname)}
                autoComplete="nickname"
                {...register("nickname")}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className="bg-white"
                required
                fullWidth
                id="email"
                label={_.capitalize(texts.adres_email)}
                {...register("email")}
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                className="bg-white"
                required
                fullWidth
                {...register("password")}
                label={_.capitalize(texts.haslo)}
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                className="bg-white"
                required
                fullWidth
                {...register("re_password")}
                label={_.capitalize(texts.powtorz_haslo)}
                type="password"
                id="re_password"
                autoComplete="new-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label={_.capitalize(texts.zgoda)}
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
            {texts.zarejestruj_sie}
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link
                href={RoutesPath.LOG_IN}
                variant="body2"
                className="text-gray-600"
              >
                {texts.masz_juz_konto_zaloguj_sie}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Registration;
