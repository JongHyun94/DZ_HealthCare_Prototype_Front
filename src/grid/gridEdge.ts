const memberGrid = {
    name: 'memberGrid',
    fields: [
        {
            fieldName: 'id',
            dataType: 'text',
        },
        {
            fieldName: 'name',
            dataType: 'text',
        },
        {
            fieldName: 'department',
            dataType: 'text',
        },
        {
            fieldName: 'phone',
            dataType: 'text',
        },
        {
            fieldName: 'mail',
            dataType: 'text',
        },
    ],
    columns: [
        {
            name: 'id',
            fieldName: 'id',
            width: '30',
            header: 'ID',
            editable: false,
        },
        {
            name: 'name',
            fieldName: 'name',
            width: '60',
            header: 'NAME',
            editable: true,
        },
        {
            name: 'department',
            fieldName: 'department',
            width: '60',
            header: 'DEPARTMENT',
            editable: false,
        },
        {
            name: 'phone',
            fieldName: 'phone',
            width: '95',
            header: 'PHONE',
            editable: false,
        },
        {
            name: 'mail',
            fieldName: 'mail',
            width: '100',
            header: 'MAIL',
            editable: false,
        },
    ]
};
export default memberGrid;