import axios from 'axios';

// Setting all data at once
export const setStudentSecondary = (studentSecondary) => ({
  type: 'SET_STUDENT_SECONDARY',
  studentSecondary,
});

export const startSetStudentSecondary = () => (dispatch) =>
  axios({
    method: 'post',
    url: 'http://localhost:3000/s/student/getstudentsecondary',
    data: { token: localStorage.getItem('studentToken') },
    config: { headers: { 'Content-Type': 'application/json' } },
  }).then((res) => {
    dispatch(setStudentSecondary(res.data[0]));
  });

// Accomplishments
export const addAccomplishment = (accomplishment) => ({
  type: 'ADD_ACCOMPLISHMENT',
  accomplishment,
});

export const startAddAccomplishment = ({
  title = '',
  photo = '',
  description = '',
}) => (dispatch) => {
  const formdata = new FormData();
  formdata.append('token', localStorage.getItem('studentToken'));
  formdata.append('photo', photo);
  formdata.append('title', title);
  formdata.append('description', description);
  return axios({
    method: 'patch',
    url: 'http://localhost:3000/s/student/addaccomplishment',
    data: formdata,
    config: { headers: { 'Content-Type': 'multipart/form-data' } },
  })
    .then((res) => {
      dispatch(addAccomplishment(res.data.accomplishments));
      return Promise.resolve();
    })
    .catch((err) => Promise.reject(err));
};

export const editAccomplishment = (accomplishment) => ({
  type: 'EDIT_ACCOMPLISHMENT',
  accomplishment,
});

export const startEditAccomplishment = ({
  title = '',
  photo = '',
  description = '',
  _id = '',
}) => (dispatch) => {
  const formdata = new FormData();
  formdata.append('token', localStorage.getItem('studentToken'));
  formdata.append('title', title);
  formdata.append('description', description);
  formdata.append('_id', _id);
  if (photo instanceof Blob) {
    formdata.append('photo', photo);
  }
  return axios({
    method: 'patch',
    url: 'http://localhost:3000/s/student/updateaccomplishment',
    data: formdata,
    config: { headers: { 'Content-Type': 'multipart/form-data' } },
  })
    .then((res) => {
      dispatch(editAccomplishment(res.data.accomplishments));
      return Promise.resolve();
    })
    .catch((err) => Promise.reject(err));
};

export const startRemoveAccomplishment = (_id) => (dispatch) =>
  axios({
    method: 'patch',
    url: 'http://localhost:3000/s/student/removeaccomplishment',
    data: {
      token: localStorage.getItem('studentToken'),
      _id,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => {
      dispatch(setStudentSecondary(res.data));
      return Promise.resolve();
    })
    .catch((err) => Promise.reject(err));

// Projects
export const addProject = (project) => ({
  type: 'ADD_PROJECT',
  project,
});

export const startAddProject = ({
  title = '',
  photos = '',
  description = '',
  link = '',
}) => (dispatch) => {
  const formdata = new FormData();
  formdata.append('token', localStorage.getItem('studentToken'));
  formdata.append('photos', photos[0]);
  formdata.append('photos', photos[1]);
  formdata.append('photos', photos[2]);
  formdata.append('photos', photos[3]);
  formdata.append('photos', photos[4]);
  formdata.append('link', link);
  formdata.append('title', title);
  formdata.append('description', description);
  return axios({
    method: 'patch',
    url: 'http://localhost:3000/s/student/addproject',
    data: formdata,
    config: { headers: { 'Content-Type': 'multipart/form-data' } },
  })
    .then((res) => {
      dispatch(addProject(res.data.projects));
      return Promise.resolve();
    })
    .catch((err) => Promise.reject(err));
};

export const editProject = (project) => ({
  type: 'EDIT_PROJECT',
  project,
});

export const startEditProject = ({
  title = '',
  photos = '',
  description = '',
  link = '',
  _id = '',
}) => (dispatch) => {
  const formdata = new FormData();
  formdata.append('token', localStorage.getItem('studentToken'));
  formdata.append('title', title);
  formdata.append('link', link);
  formdata.append('description', description);
  formdata.append('_id', _id);
  if (photos instanceof Blob) {
    formdata.append('photos', photos);
  }
  return axios({
    method: 'patch',
    url: 'http://localhost:3000/s/student/updateproject',
    data: formdata,
    config: { headers: { 'Content-Type': 'multipart/form-data' } },
  })
    .then((res) => {
      dispatch(editAccomplishment(res.data.projects));
      return Promise.resolve();
    })
    .catch((err) => Promise.reject(err));
};

export const startRemoveProject = (_id) => (dispatch) =>
  axios({
    method: 'patch',
    url: 'http://localhost:3000/s/student/removeproject',
    data: {
      token: localStorage.getItem('studentToken'),
      _id,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => {
      dispatch(setStudentSecondary(res.data));
      return Promise.resolve();
    })
    .catch((err) => Promise.reject(err));
