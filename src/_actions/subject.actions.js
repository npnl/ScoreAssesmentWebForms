import { serverConstants } from '../_constants';
import { formConstants } from '../_constants';
import { subjectService } from '../_services';
import { formService } from '../_services';
import { alertActions } from './';
import saveAs from 'file-saver';

export const subjectActions = {
  getAllSubjects,
  downloadAssessment,
  getAllGroups,
  createNewGroup
};

function getAllSubjects(subject_name) {
    return dispatch => {
        subjectService.getAll(subject_name)
            .then(
              subject_names => {
                    dispatch(success(subject_names));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function success(subjects_info) { return { type: serverConstants.GET_ALL_SUBJECTS_SUCCESS, subjects: subjects_info } }
    function failure(error) { return { type: serverConstants.GET_ALL_SUBJECTS_FAILURE, error } }
}

function getAllGroups() {
  return dispatch => {
    subjectService.getAllGroups()
      .then(
        group_names => {
          dispatch(success(group_names));
        },
        error => {
          dispatch(failure(error.toString()));
          dispatch(alertActions.error(error.toString()));
        }
      );
  };

  function success(group_names) { return { type: serverConstants.GET_ALL_GROUPS_SUCCESS, groups: group_names } }
  function failure(error) { return { type: serverConstants.GET_ALL_GROUPS_FAILURE, error } }
}

function createNewGroup(group_data) {
  return dispatch => {
    formService.sendFormDataToServer(group_data, formConstants.TYPE_GROUP_CREATE_FORM)
      .then(
        success_response => {
          dispatch(success(success_response));
        },
        error => {
          dispatch(failure(error.toString()));
          dispatch(alertActions.error(error.toString()));
        }
      );
  };

  function success(message) { return { type: formConstants.FORM_DATA_SAVE_SUCCESS, message } }
  function failure(error) { return { type: formConstants.FORM_DATA_SAVE_FAILURE, error } }
}

function downloadAssessment(assessment_id, assessment_type) {
  return dispatch => {
    subjectService.getAssessment(assessment_id, assessment_type)
      .then(
        response => {
          var blob = new Blob([response], {type: "text/csv;charset=utf-8"});
          saveAs(blob, `${assessment_type}.csv`);
          // dispatch(success(response));
        },
        error => {
          // dispatch(failure(error.toString()));
          // dispatch(alertActions.error(error.toString()));
        }
      );
  };

  function success(response) { return { type: serverConstants.GET_ALL_SUBJECTS_SUCCESS, subjects: response } }
  function failure(error) { return { type: serverConstants.GET_ALL_SUBJECTS_FAILURE, error } }
}