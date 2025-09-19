// const BASE_URL = "http://127.0.0.1:8080";
const BASE_URL = "http://97.74.87.167/api";

const apiRoutes = {
  signup: `${BASE_URL}/admin/signup`,
  signIn: `${BASE_URL}/admin/signIn`,
  candidateRegistration: `${BASE_URL}/careers/candidateRegistration`,
  candidateDetails: `${BASE_URL}/careers/getCandidateDetails`,
  userDetails: `${BASE_URL}/contact/userdetails`,
  jobDetails: `${BASE_URL}/careers/jobDetails`,
  customerDetails: `${BASE_URL}/customer/getCustomerDetails`,
};

export default apiRoutes;
