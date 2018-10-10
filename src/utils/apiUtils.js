import { set, get, del } from "./storageUtils"
import { ACCESS_TOKEN_KEY } from "../config";

const logoutUser = () => {
    del(ACCESS_TOKEN_KEY);
};

module.exports =  {
    tokenPlugin: req => {
        let token = get(ACCESS_TOKEN_KEY);
        if (token) {
            req.set('Authorization', `${token}`);
        }
    },
    validateAccess: (req) => {
        req.on('response', (res) => {
            if(res.status === 401) {
                logoutUser();
            }
        });
    },
    setAccessToken: (req) => {
        req.on('response', (res) => {
            if(res.status === 200) {
                let { access_token } = res.body.session;
                set(ACCESS_TOKEN_KEY, access_token);
            }
        });
    },
    removeAccessToken: (req) => {
        req.on('response', (res) => {
            if(res.status === 200) {
                logoutUser();
            }
        });
    }
}