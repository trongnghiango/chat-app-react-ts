import { Link } from "react-router-dom";
import { Button, InputContainer, InputField, InputLabel } from "../../utils/styles";
import styles from "./index.module.scss"
import { SubmitHandler, useForm } from "react-hook-form";

export const LoginForm = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<any>();

  console.log({ errors });

  const onSubmit: SubmitHandler<any> = (data) => {


  }
  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <InputContainer>
        <InputLabel htmlFor="email">Email</InputLabel>
        <InputField id="email" type="email"
          {...register('email', {
            required: true
          })}
        />
      </InputContainer>
      <InputContainer className={styles.loginFormPassword}>
        <InputLabel htmlFor="password">Password</InputLabel>
        <InputField id="password" type="password"
          {...register('password', {
            required: true
          })}
        />
      </InputContainer>
      <Button className={styles.button}>Login</Button>
      <section className={styles.footerText}>
        <span>Don't have an Account?{' '}</span>

        <Link to="/register">
          <span>Register</span>
        </Link>
      </section>
    </form>
  );
}