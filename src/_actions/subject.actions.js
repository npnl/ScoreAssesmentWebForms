import { serverConstants } from '../_constants';
import { subjectService } from '../_services';
import { alertActions } from './';

export const subjectActions = {
  getAllSubjects,
  downloadAssessment
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

function downloadAssessment(assessment_id, assessment_type) {
  return dispatch => {
    subjectService.getAssessment(assessment_id, assessment_type)
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