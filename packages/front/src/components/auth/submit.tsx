import axios, {
  Method,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';
import { FORM_ERROR } from 'final-form';
import { navigate } from '@reach/router';
import { mergeRight } from 'ramda';

import { FormValues } from './index';


interface SignInReponseSuccess {
  name: string;
}

interface SignInResponseFail {
  error: string;
}

function submit(values: FormValues): Promise<{ [FORM_ERROR]: string } | void> {
  const source = axios.CancelToken.source();
  const config: AxiosRequestConfig = {
    cancelToken: source.token,
  };

  return axios(mergeRight(
    {
      method: 'POST' as Method,
      url: '/api/login',
      data: values,
      headers: {
        'Content-Type': 'application/json',
      },
    },
    config,
  )).then(
    ({ status }: AxiosResponse<SignInReponseSuccess>) => {
      if (status === 200) {
        navigate('/profile/');
      }
      return undefined;
    },
    ({ response: { status, data } }: { response: AxiosResponse<SignInResponseFail> }) => {
      switch (status) {
        case (400):
        case (401): {
          return {
            [FORM_ERROR]: data.error,
          };
        }

        default: {
          return {
            [FORM_ERROR]: 'Щось пішло не так. Спробуйте ще раз',
          };
        }
      }
    },
  );
}

export default submit;
