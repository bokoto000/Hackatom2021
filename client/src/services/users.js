import superagent from 'superagent';

class UsersService {
    async checkIfUsersExists(id) {
        const res = await superagent.get(`http://localhost:5000/user/${id}`);
        return res;
    }
}

const usersService = new UsersService();

export default usersService;