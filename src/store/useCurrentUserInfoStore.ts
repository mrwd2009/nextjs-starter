import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface UserInfo {
  userEmail: string;
  userName: string;
  userRoles: string[];
}

interface UserInfoAction {
  updateUserInfo: (info: { userEmail?: string; userName?: string; userRoles?: string[] }) => void;
}

const initialState: UserInfo = {
  userEmail: '',
  userName: '',
  userRoles: [],
};

export const useCurrentUserInfoStore = create<UserInfo & UserInfoAction>()(
  devtools((set) => ({
    ...initialState,
    updateUserInfo: (info) => set({ ...info }),
  })),
);
