

export const getUsersController = (req, res) => {
    res.status(200).send("User getting successfully");
};

export const createUsersController = (req, res) => {
    const userData = req.body;

    console.log(userData);

    res.status(201).json({
        success: true,
        message: "User created successfully",
        data: userData,
    });
};

export const updateUsersController = (req, res) => {
    const userData = req.body;

    console.log(userData);

    res.status(200).json({
        success: true,
        message: "User updated successfully",
        data: userData,
    });
};

export const deleteUsersController = (req, res) => {
    const userData = req.body;

    console.log(userData);

    res.status(200).json({
        success: true,
        message: "User deleted successfully",
        data: userData,
    });
};
