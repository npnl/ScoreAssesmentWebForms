import { serverConstants } from '../_constants';
import { formConstants, alertConstants } from '../_constants';
import { subjectService } from '../_services';
import { formService } from '../_services';
import { alertActions } from './';
import saveAs from 'file-saver';

export const subjectActions = {
  getAllSubjectsInfo,
  getAllSubjectNames,
  downloadAssessment,
  getAllGroups,
  createNewGroup
};

function getAllSubjectsInfo() {
    return dispatch => {
        subjectService.getAllSubjectsInfo()
            .then(
              subjects_info => {
                    dispatch(success(subjects_info));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function success(subjects_info) { return { type: serverConstants.GET_ALL_SUBJECTS_INFO_SUCCESS, subjects: subjects_info } }
    function failure(error) { return { type: serverConstants.GET_ALL_SUBJECTS_INFO_FAILURE, error } }
}

function getAllSubjectNames() {
  return dispatch => {
    subjectService.getAllSubjectNames()
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

  function success(subject_names) { return { type: serverConstants.GET_ALL_SUBJECT_NAMES_SUCCESS, subjects: subject_names } }
  function failure(error) { return { type: serverConstants.GET_ALL_SUBJECT_NAMES_FAILURE, error } }
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

  function success(message) { return { type: alertConstants.SUCCESS, message } }
  function failure(error) { return { type: alertConstants.ERROR, error } }
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