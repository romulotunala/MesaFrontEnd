export const validateEmail = email => {
  if (!email) {
    return true;
  }

	const validation = new RegExp('^[\\w-]+(\\.[\\w-]+)*@([\\w-]+\\.)+[a-zA-Z]{2,7}$');
  
  return validation.test(email);
};