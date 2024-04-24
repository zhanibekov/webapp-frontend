import React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { fetchRegister, fetchUserData, selectIsAuth } from "../../redux/slices/Auth";
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import {Navigate} from 'react-router-dom'

import styles from './Login.module.scss';

export const Registration = () => {
  const isAuth = useSelector(selectIsAuth)
  const dispatch = useDispatch();
  const {register, handleSubmit, formState:{errors, isValid}} = useForm({
    defaultValues : {
      fullName: 'Жунисали Еламан',
      email: 'elamanzhanibekov@gmail.com',
      password: '870536505345',
    },
    mode: 'onChange',
  });

  const onSubmit = async(values) => {
    const data = await dispatch(fetchRegister(values));
    if(!data.payload) {
      return alert('Не удалось зарегистрироваться')
    }
   if('token' in data.payload) {
    window.localStorage.setItem('token', data.payload.token);
   }
   console.log(data);
  }
 
    if(isAuth) {
      return <Navigate  to={'/'}/>;
    }
  return (
    <Paper classes={{ root: styles.root }}>
      <Typography classes={{ root: styles.title }} variant="h5">
        Создание аккаунта
      </Typography>
      <div className={styles.avatar}>
        <Avatar sx={{ width: 100, height: 100 }} />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>

      <TextField error={Boolean(errors.fullName?.message)}
         type='fullName' helperText={errors.fullName?.message}
        {...register('fullName',{required: 'Укажите полное имя'})} className={styles.field} label="Полное имя" fullWidth />


      <TextField error={Boolean(errors.email?.message)}
         type='email' helperText={errors.email?.message}
        {...register('email',{required: 'Укажите почту'})} className={styles.field} label="E-Mail" fullWidth />


      <TextField error={Boolean(errors.password?.message)}
        type='password' helperText={errors.password?.message}
        {...register('password',{required: 'Укажите пароль'})} className={styles.field} label="Пароль" fullWidth />


      <Button disabled={!isValid} type='submit' variant="contained" fullWidth>
        Зарегистрироваться
      </Button>

      </form>
    </Paper>
  );
};
