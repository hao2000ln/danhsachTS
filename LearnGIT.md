--learn git ---------

## 1. khai báo thông tin người dùng

1.1 khai bao
`git config --global user.name "Your Name"`
` git config --global user.email "your.email@example.com`
1.2 kiem tra thong tin
`git config --global --list`
`git config --list`

## 2. clone repository
`git clone <repository-url>`

## 3. Khởi tạo, đẩy code lên github
a. git init
b. git status
c. git add .
d. git commit -m "comment code"
e. git remote add origin <repository-url>
f. git push -u origin <branch-name>

## 4. Làm việc với Branch
` git branch` : liệt kê các nhánh
` git branch <branch-name>` : Tạo 1 nhánh mới
` git checkout <branch-name>` : chuyển sang nhánh khác
` git merge <branch-name> `: Hợp nhất các thay đổi từ một nhánh vào nhánh hiện tại.
` git branch -d <branch-name>` : Xóa một nhánh.
` git branch -b <branch-name>`: Tạo một nhánh mới và chuyển sang nhánh đó.