import { Link } from "react-router-dom";
import { Button, InputContainer, InputField, InputLabel } from "../../utils/styles";
import styles from "./index.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";



export const RegisterForm = () => {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<any>();
  console.log({ errors });
  const onSubmit: SubmitHandler<any> = (data) => {

    console.log({ data })
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <InputContainer>
        <InputLabel htmlFor="email">Email</InputLabel>
        <InputField
          id="email"
          type="email"
          {...register('email', {
            required: 'Email is required'
          })}
        />
      </InputContainer>
      <section className={styles.nameFieldRow}>
        <InputContainer>
          <InputLabel htmlFor="firstName">First Name</InputLabel>
          <InputField
            id="firstName" type="text"
            {...register('firstName', {
              required: 'First Name is require'
            })}
          />
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="lastName">Last Name</InputLabel>
          <InputField
            id="lastName" type="text"
            {...register('lastName', {
              required: 'Last Name is required'
            })}
          />
        </InputContainer>
      </section>
      <InputContainer>
        <InputLabel htmlFor="password">Password</InputLabel>
        <InputField id="password" type="password"
          {...register('password', {
            required: 'Password is required'
          })}
        />
      </InputContainer>
      <Button className={styles.button}>Create My Account</Button>
      <section className={styles.footerText}>
        <span>Already have an Account? {' '}</span>
        <Link to="/login">
          <span>Login</span>
        </Link>
      </section>
    </form>
  );
}