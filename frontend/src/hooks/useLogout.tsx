//hooks
import useAuthContext from "./useAuthContext";
import useExpensesContext from "./useExpensesContext";

const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: expensesDispatch } = useExpensesContext();

  const logout = () => {
    localStorage.removeItem("user");
    expensesDispatch({ type: "SET_EXPENSES", payload: null });
    dispatch({ type: "LOGOUT" });
  };
  return { logout };
};

export default useLogout;
