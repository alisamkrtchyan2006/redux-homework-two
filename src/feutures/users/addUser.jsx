import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./users.api";

export const AddUser = () => {
    const { status } = useSelector(state => state.status)
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();

  const onSubmit = (data) => {
    dispatch(addUser(data))
    .then(() => {
      navigate('/')
      reset()
    });
  };

  return ( <div>
        <h3>AddUser</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <label>Name</label>
            <input {...register("name", { required: true })} />
            {errors.name && <p>Name is required</p>}
        </div>

        <div>
            <label>Salary</label>
            <input type="number" {...register("salary", { required: true, min: 0 })} />
            {errors.salary && <p>Salary is required and must be a positive number</p>}
        </div>

        <button type="submit">Add User</button>
        </form>
    </div>
  );
};