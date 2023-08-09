export default function authHeader() {
    const getUser = sessionStorage.getItem("user");
    let user = null;
    if (getUser) user = JSON.parse(getUser);

    if (user && user.access_token) {
        return {
            Authorization: "Bearer " + user.access_token
        };
    } else {
        return { Authorization: ""};
    }
}