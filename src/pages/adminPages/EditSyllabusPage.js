import React from 'react';
import { connect } from 'react-redux';

// Component
import SyllabusForm from './../../components/adminDashboard/SyllabusForm';

// Actions
import {
  startEditSyllabus,
  startRemoveSyllabus,
} from './../../actions/syllabus';

const EditSyllabusPage = ({
  syllabus,
  history,
  editSyllabus,
  deleteSyllabus,
}) => (
  <div>
    <h2>Edit Syllabus</h2>
    {syllabus ? (
      <SyllabusForm
        {...syllabus}
        history={history}
        onSubmit={editSyllabus}
        deleteSyllabus={deleteSyllabus}
        edit
      />
    ) : (
      <p>L</p>
    )}
  </div>
);

const mapStateToProps = (state, props) => ({
  syllabus: state.syllabus.find(
    (syllabus) => syllabus._id === props.match.params._id
  ),
});

const mapDispatchToProps = (dispatch) => ({
  editSyllabus: (val, _id) => dispatch(startEditSyllabus(val, _id)),
  deleteSyllabus: (_id) => dispatch(startRemoveSyllabus(_id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditSyllabusPage);