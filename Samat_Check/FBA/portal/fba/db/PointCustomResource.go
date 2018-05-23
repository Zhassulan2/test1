package db

import "github.com/go-openapi/strfmt"
import "../dbmodel"

//PointGetStaff получить владельцу
func (dbm *DBManager) PointGetStaff(size, page int, uid strfmt.UUID4) (points []dbModel.Point, err error) {
	dbm.DB.Where("staff = ?", uid).Limit(size).Order("id asc").Offset((page - 1) * size).Find(&points)
	return
}

//PointGetClient получить по клиенту
func (dbm *DBManager) PointGetClient(size, page int, cid strfmt.UUID4) (points []dbModel.Point, err error) {
	dbm.DB.Where("client_id = ?", cid).Limit(size).Order("id asc").Offset((page - 1) * size).Find(&points)
	return
}