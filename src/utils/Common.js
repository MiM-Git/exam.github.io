export const getUser = () => {
  const userStr = sessionStorage.getItem('user');
  if (userStr) return (userStr);
  else return null;
}
export const getExam = () => {
  const ExamStr = sessionStorage.getItem('exam');
  if (ExamStr) return (ExamStr);
  else return null;
}
export const getToken = () => {
  return sessionStorage.getItem('token') || null;
}

export const removeUserSession = () => {
  sessionStorage.removeItem('user');
}
export const removeExamSession = () => {
  sessionStorage.removeItem('exam');
}
export const setUserSession = (user) => {
  sessionStorage.setItem('user', JSON.stringify(user));
}
export const setExamSession = (examID) => {
  sessionStorage.setItem('exam', examID);
}
