/* eslint-disable import/prefer-default-export */
import axios from 'axios';


export const getServerStatus = () => axios.get(process.env.REACT_APP_STATUS_URL);
