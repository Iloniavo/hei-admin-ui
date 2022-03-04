import { List, Datagrid, TextField, ShowButton, EditButton } from 'react-admin'
import authProvider from '../../providers/authProvider'
import { profileFilters } from '../profile'
import PrevNextPagination from '../utils/PrevNextPagination'

const StudentList = props => {
  const permission = authProvider.getCachedRole()
  return (
    <List label='Étudiants' bulkActionButtons={false} {...props} filters={profileFilters} pagination={<PrevNextPagination />}>
      <Datagrid rowClick='show'>
        <TextField source='ref' label='Référence' />
        <TextField source='first_name' label='Prénom·s' />
        <TextField source='last_name' label='Nom·s' />
        {permission === 'MANAGER' ? <EditButton /> : <ShowButton />}
      </Datagrid>
    </List>
  )
}

export default StudentList
