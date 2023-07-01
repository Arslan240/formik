import { useFormik } from "formik";
import { basicSchema } from "../schemas";

const onSubmit = async (values, actions) => {
  console.log("submitted");
  console.log(values)
  console.log(actions)
  await new Promise(resolve => setTimeout(resolve, 1000))
  actions.resetForm()

}

const BasicForm = () => {

  const {values, touched, isSubmitting, handleBlur, handleChange, handleSubmit, errors} = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: ""
    },
    validationSchema: basicSchema,
    onSubmit,
  })

  // console.log(values)
  console.log(errors)

  return (
    <form onSubmit={handleSubmit}autoComplete="off">
      <label htmlFor="email">Email</label>
      <input 
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        id="email" type="email" 
        placeholder="Enter your email" 
        className={errors.email && touched.email ? "input-error" : ""} // if email error exists and if user has clicked out of email field then touched will be true.
      />
      {errors.email && touched.email && <p className="error">{errors.email}</p>}

      <label htmlFor="age">Age</label>
      <input 
        value={values.age}
        onChange={handleChange}
        onBlur={handleBlur}
        id="age" type="number" 
        placeholder="Enter your age" 
        className={errors.age && touched.age ? "input-error" : ""}
      />
      {errors.age && touched.age && <p className="error">{errors.age}</p>}

      <label htmlFor="password">Password</label>
      <input 
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        id="password" type="password" 
        placeholder="Enter your password" 
        className={errors.password && touched.password ? "input-error" : ""}
      />
      {errors.password && touched.password && <p className="error">{errors.password}</p>}
      
      <label htmlFor="confirmPassword">Confirm Password</label>
      <input 
        value={values.confirmPassword}
        onChange={handleChange}
        onBlur={handleBlur}
        id="confirmPassword" type="password" 
        placeholder="Enter your password" 
        className={errors.confirmPassword && touched.confirmPassword ? "input-error" : ""}
      />
      {errors.confirmPassword && touched.confirmPassword && <p className="error">{errors.confirmPassword}</p>}

      <button disabled={isSubmitting}>Submit</button>
    </form>
  );
};
export default BasicForm;
