import axios from "axios";

export type UpdateProfileDTO = {
  data: {
    name: string;
  };
};

// patch users/{$id} の方がURLの整合性を保てそう
// で、mypage/profile はそのエイリアスみたいな
export const updateProfile = ({ data }: UpdateProfileDTO) => {
  return axios.patch(`users/profile`, data);
};
