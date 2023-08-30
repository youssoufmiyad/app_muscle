package app_muscle

import (
	"database/sql"
	"fmt"
)

// ANCHOR - STRUCTURE BDD
type DataBase struct {
	DB *sql.DB
}

func NewDB(db *sql.DB) *DataBase {
	return &DataBase{
		DB: db,
	}
}

// ANCHOR - AddUser
func (db *DataBase) AddUser(id int, username string, password string) {
	stmt, _ := db.DB.Prepare(`INSERT INTO "users"(ID, Username, Password) values(?, ?, ?)`)
	_, err := stmt.Exec(id, username, password)
	fmt.Println(err)
}

func (db *DataBase) CheckUser(username string, password string) int {
	var user string
	var pwd string
	var userID int
	err := db.DB.QueryRow(`SELECT ID,Username,Password from users WHERE Username = ? AND Password = ?`, username, password).Scan(&userID, &user, &pwd)
	if err != nil {
		panic(err)
	} else {
		print("new user = ", user, " pass = ", pwd, "ID = ", userID)
		return userID
	}
}
