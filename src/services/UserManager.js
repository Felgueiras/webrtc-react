const UserManager = {
  _instance: null,
  get instance() {
    if (!this._instance) {
      this._instance = {
        setUser() {
          return "singletonMethod";
        },

        _user: "rafael-pinto",

        get user() {
          return this._user;
        },

        set user(value) {
          this._user = value;
        }
      };
    }
    return this._instance;
  }
};

export default UserManager;
