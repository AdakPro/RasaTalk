import * as Yup from 'yup';

export const wrapperValidator = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Please enter a longer agent name')
    .required('Name is required.'),
  avatar: Yup.string().url('Please enter a valid URL'),
});

export const agentValidator = Yup.object().shape({
  agent: Yup.string()
    .min(2, 'Please enter a longer agent name')
    .required('Name is required.'),
  avatar: Yup.string().url('Please enter a valid URL'),
});
