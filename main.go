package main

import (
	app "app_muscle/src/server"
	"database/sql"
	"net/http"
	"regexp"

	_ "github.com/mattn/go-sqlite3"
)

func Home() {
	fileServer := http.FileServer(http.Dir("build"))
	fileMatcher := regexp.MustCompile(`\.[a-zA-Z]*$`)
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		if !fileMatcher.MatchString(r.URL.Path) {
			http.ServeFile(w, r, "build/index.html")
		} else {
			fileServer.ServeHTTP(w, r)
		}
	})

}

func Register(w http.ResponseWriter, r *http.Request) {
	fileServer := http.FileServer(http.Dir("build"))
	fileMatcher := regexp.MustCompile(`\.[a-zA-Z]*$`)
	switch r.Method {
	case "GET":
		if !fileMatcher.MatchString(r.URL.Path) {
			http.ServeFile(w, r, "build/index.html")
		} else {
			fileServer.ServeHTTP(w, r)
		}
	case "POST":
		println("email = ", r.FormValue("email"), "\n", r.FormValue("password"))
	}
}

func main() {
	db, _ := sql.Open("sqlite3", "src/server/db/test.sqlite")
	newdb := app.NewDB(db)
	abc := newdb.CheckUser("boss", "man")
	println("abc = ", abc)
	println("go http://localhost:8000")
	Home()
	http.HandleFunc("/signup", Register)
	http.ListenAndServe(":8000", nil)
}
