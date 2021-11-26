import superagent from 'superagent';

class UsersService {

    async checkIfUsersExists(id) {
        const res = await superagent.get(`${process.env.REACT_APP_SERVER_BASE_URL}/user/${id}`);
        return res;
    }
}

const usersService = new UsersService();

export default usersService;