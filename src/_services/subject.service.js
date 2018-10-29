import { authHeader } from '../_helpers';
import { serverConstants } from '../_constants'
import { userService } from './user.service'

export const subjectService = {
  getAllSubjectsInfo,
  getAssessment,
  getAllGroups,
  getAllSubjectNames
};

function getAllSubjectsInfo() {
    const requestOptions = {
        method: 'GET',
        headers: {...authHeader(), 'Content-Type': 'application/json'}
    };

    let apiEndPoint = `${serverConstants.BASE_URL}/all_subject_info`;

    return fetch(apiEndPoint, requestOptions)
        .then(handleResponse)
        .then(response_data => {
            return response_data;
        });
}

function getAllSubjectNames() {
  const requestOptions = {
    method: 'GET',
    headers: {...authHeader(), 'Content-Type': 'application/json'}
  };

  let apiEndPoint = `${serverConstants.BASE_URL}/all_subject_names`;

  return fetch(apiEndPoint, requestOptions)
    .then(handleResponse)
    .then(response_data => {
      return response_data;
    });
}

function getAllGroups() {
  const requestOptions = {
    method: 'GET',
    headers: {...authHeader(), 'Content-Type': 'application/json'}
  };

  let apiEndPoint = `${serverConstants.BASE_URL}/groups`;

  return fetch(apiEndPoint, requestOptions)
    .then(handleResponse)
    .then(response_data => {
      return response_data;
    });
}

function getAssessment(assessment_id, assessment_type) {
  const requestOptions = {
    method: 'GET',
    headers: {...authHeader(), 'Content-Type': 'application/json'}
  };

  let apiEndPoint = `${serverConstants.BASE_URL}/${assessment_type}/assessment/${assessment_id}/${assessment_type}.csv`;

  return fetch(apiEndPoint, requestOptions)
    .then(downloadStreamData)
    .then(response_data => {
      return response_data;
    });
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
              userService.logout();
                window.location.reload(true);
            }

            const error = (data && data.errors && data.errors[0]) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}

function downloadStreamData(response) {
  return response.text().then(text => {
    if (!response.ok) {
      if (response.status === 401) {
        userService.logout();
        window.location.reload(true);
      }
      const data = text && JSON.parse(text);
      const error = (data && data.errors && data.errors[0]) || response.statusText;
      return Promise.reject(error);
    }

    return text;
  });
}