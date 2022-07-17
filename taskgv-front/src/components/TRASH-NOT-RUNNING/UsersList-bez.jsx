import React, { useState, useEffect, useMemo, useRef } from "react";
import { useTable } from "react-table";
import axios from "axios";
import { Link, useNavigate, useLocation } from "react-router-dom";

const UsersList = (props) => {
    const [users, setUsers] = useState([]);
    // const [searchName, setSearchName] = useState("");
    const usersRef = useRef();

    usersRef.current = users;

    useEffect(() => {
        retrieveUsers();
    }, []);

    // const onChangeSearchName = (e) => {
    //     const searchName = e.target.value;
    //     setSearchName(searchName);
    // };

    const retrieveUsers = async () => {
        try {
            axios.get(process.env.REACT_APP_USERS_URL, {
                withCredentials: true
            })
                .then((response) => {
            setUsers(response.data)})
        } catch (err) {
            console.error(err);
        }
    }

    // const refreshList = () => {
    //     retrieveUsers();
    // };
    //
    // const removeAltUsers = () => {
    //     UserDataService.removeAll()
    //         .then((response) => {
    //             console.log(response.data);
    //             refreshList();
    //         })
    //         .catch((e) => {
    //             console.log(e);
    //         });
    // };

    // const findByName = () => {
    //     UserDataService.findByName(searchName)
    //         .then((response) => {
    //             setUsers(response.data);
    //         })
    //         .catch((e) => {
    //             console.log(e);
    //         });
    // };

    const openUser = (rowIndex) => {
        const id = usersRef.current[rowIndex].id;

        props.history.push("/users/" + id);
    };

    const deleteUser = async (rowIndex) => {
        const id = usersRef.current[rowIndex].id;

        try {
            axios.delete(process.env.REACT_APP_USERS_URL + id, {
                withCredentials: true
            })
                .then((response) => {
                    props.history.push("/users");

                    let netUsers = [...usersRef.current];
                    netUsers.splice(rowIndex, 1);

                    setUsers(netUsers);
                })
        } catch (err) {
                console.error(err);
            }
        }


    const columns = useMemo(
        () => [
            {
                Header: "Nom",
                accessor: "lastName",
            },
            {
                Header: "Prénom",
                accessor: "firstName",
            },
            {
                Header: "Email",
                accessor: "email",
            },
            {
                Header: "Actions",
                accessor: "actions",
                Cell: (props) => {
                    const rowIdx = props.row.id;
                    return (
                        <div>
              <span onClick={() => openUser(rowIdx)}>
                <i className="far fa-edit action mr-2"></i>
              </span>

                            <span onClick={() => deleteUser(rowIdx)}>
                <i className="fas fa-trash action"></i>
              </span>
                        </div>
                    );
                },
            },
        ],
        []
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns,
        data: users,
    });

    return (
        <div className="list row">
            {/*<div className="col-md-8">*/}
            {/*    <div className="input-group mb-3">*/}
            {/*        <input*/}
            {/*            type="text"*/}
            {/*            className="form-control"*/}
            {/*            placeholder="Search by name"*/}
            {/*            value={searchName}*/}
            {/*            onChange={onChangeSearchName}*/}
            {/*        />*/}
            {/*        <div className="input-group-append">*/}
            {/*            <button*/}
            {/*                className="btn btn-outline-secondary"*/}
            {/*                type="button"*/}
            {/*                onClick={findByName}*/}
            {/*            >*/}
            {/*                Search*/}
            {/*            </button>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className="col-md-12 list">
                <table
                    className="table table-striped table-bordered"
                    {...getTableProps()}
                >
                    <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()}>
                                    {column.render("Header")}
                                </th>
                            ))}
                        </tr>
                    ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                    {rows.map((row, i) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                    return (
                                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>

            {/*<div className="col-md-8">*/}
            {/*    <button className="btn btn-sm btn-danger" onClick={removeAltUsers}>*/}
            {/*        Remove All*/}
            {/*    </button>*/}
            {/*</div>*/}
        </div>
    );
};

export default UsersList
