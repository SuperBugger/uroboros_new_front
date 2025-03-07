const routeMap = [
    {
        pattern: /^projects$/,
        updateLinks: () => ['#projects'],
        dataUrl: () => '/projects',
        tableColumns: [
            { data: 'prj_id', title: 'ID' },
            { data: 'prj_name', title: 'Project Name', className: 'project-name' },
            { data: 'prj_desc', title: 'Description', className: 'editable' },
            { data: 'vendor', title: 'Vendor' },
            { data: 'arch_name', title: 'Architecture' }
        ]
    },
    {
        pattern: /^projects\/(\d+)\/assembly$/,
        updateLinks: (match) => [`#projects`, `#projects/${match[1]}/assembly`],
        dataUrl: (match) => `/projects/${match[1]}/assembly`,
        tableColumns: [
            { data: 'assm_id', title: 'Assembly ID' },
            { data: 'assm_date_created', title: 'Date Created', className: 'assm-date' },
            { data: 'assm_desc', title: 'Description', className: 'editable' },
            { data: 'assm_version', title: 'Version' }
        ]
    },
    {
        pattern: /^projects\/(\d+)\/assembly\/(\d+)\/package$/,
        updateLinks: (match) => [`#projects`, `#projects/${match[1]}/assembly`, `#projects/${match[1]}/assembly/${match[2]}/package`],
        dataUrl: (match) => `/projects/${match[1]}/assembly/${match[2]}/package`,
        tableColumns: [
            { data: 'pkg_name', title: 'Package Name', className: 'package-name' },
            { data: 'pkg_vrs_id', title: 'Package Version ID' },
            { data: 'version', title: 'Version' },
            { data: 'author_name', title: 'Author' },
            { data: 'pkg_date_created', title: 'Date Created' }
        ]
    },
    {
        pattern: /^projects\/(\d+)\/assembly\/(\d+)\/packages\/(\d+)\/changelog$/,
        updateLinks: (match) => [`#projects`, `#projects/${match[1]}/assembly`, `#projects/${match[1]}/assembly/${match[2]}/package`, `#projects/${match[1]}/assembly/${match[2]}/packages/${match[3]}/changelog`],
        dataUrl: (match) => `/projects/${match[1]}/assembly/${match[2]}/packages/${match[3]}/changelog`,
        tableColumns: [
            { data: 'version', title: 'Version' },
            { data: 'author_name', title: 'Author' },
            { data: 'date_added', title: 'Date Added' },
            { data: 'log_desc', title: 'Description' }
        ]
    },
    {
        pattern: /^cve$/,
        updateLinks: () => ['#cve'],
        dataUrl: () => '/cve',
        tableColumns: [
            { data: 'cve_name', title: 'CVE Name' },
            { data: 'pkg_name', title: 'Package Name' },
            { data: 'rep_name', title: 'Repository Name' },
            // { data: 'rep_ver', title: 'Repository Version' },
            { data: 'st_name', title: 'Status' },
            { data: 'urg_name', title: 'Urgency' },
            { data: 'severity_level', title: 'Severity Level' },
            { data: 'date_discovered', title: 'Date Discovered' },
            { data: 'cve_desc', title: 'Description', visible: false }
        ],
        afterLoad: () => {
            // Отображаем панели CVE
            document.getElementById('cve-panels').style.display = 'block';
            document.getElementById('cve-data-panel').style.display = 'flex';
            document.getElementById('cve-data-panel').style.justifyContent = 'center';

            // Инициализируем панель фильтров
            initializeFilterPanel();
        }
    },
    {
        pattern: /^projects\/(\d+)\/assembly\/(\d+)\/package\/(\d+)\/vulnerabilities$/,
        updateLinks: (match) => [
            `#projects`,
            `#projects/${match[1]}/assembly`,
            `#projects/${match[1]}/assembly/${match[2]}/package`,
            `#projects/${match[1]}/assembly/${match[2]}/package/${match[3]}/vulnerabilities`
        ],
        dataUrl: (match) => `/projects/${match[1]}/assembly/${match[2]}/package/${match[3]}/vulnerabilities`,
        tableColumns: [
            { data: 'cve_name', title: 'CVE Name' },
            { data: 'st_name', title: 'Status' },
            { data: 'urg_name', title: 'Urgency' },
            { data: 'severity_level', title: 'Severity Level' },
            { data: 'date_discovered', title: 'Date Discovered' },
            { data: 'cve_desc', title: 'Description', visible: false }
        ],
        afterLoad: () => {
            // Отображаем панели CVE
            document.getElementById('cve-panels').style.display = 'block';
            document.getElementById('cve-data-panel').style.display = 'flex';
            document.getElementById('cve-data-panel').style.justifyContent = 'center';

            // Инициализируем панель фильтров
            initializeFilterPanel();
        }
    },
    {
        pattern: /^projects\/(\d+)\/assembly\/(\d+)\/package\/([^/]+)\/vulnerabilities$/,
        updateLinks: (match) => [
            `#projects`,
            `#projects/${match[1]}/assembly`,
            `#projects/${match[1]}/assembly/${match[2]}/package`,
            `#projects/${match[1]}/assembly/${match[2]}/package/${match[3]}/vulnerabilities`
        ],
        dataUrl: (match) => `/projects/${match[1]}/assembly/${match[2]}/package/${match[3]}/vulnerabilities`,
        tableColumns: [
            { data: 'cve_name', title: 'CVE Name' },
            { data: 'st_name', title: 'Status' },
            { data: 'urg_name', title: 'Urgency' },
            { data: 'severity_level', title: 'Severity Level' },
            { data: 'date_discovered', title: 'Date Discovered' },
            { data: 'cve_desc', title: 'Description', visible: false }
        ],
        afterLoad: () => {
            // Отображаем панели CVE
            document.getElementById('cve-panels').style.display = 'block';
            document.getElementById('cve-data-panel').style.display = 'flex';
            document.getElementById('cve-data-panel').style.justifyContent = 'center';

            // Инициализируем панель фильтров
            initializeFilterPanel();
        }
    },
    {
        pattern: /^projects\/(\d+)\/assembly\/(\d+)\/compare\/(\d+)$/,
        updateLinks: (match) => [`#projects`, `#projects/${match[1]}/assembly`, `#projects/${match[1]}/assembly/${match[2]}/compare/${match[3]}`],
        dataUrl: (match) => `/projects/${match[1]}/assembly/${match[2]}/compare/${match[3]}`,
        tableColumns: [
            { data: 'pkg_name', title: 'Название пакета' },
            { data: 'state', title: 'Состояние', render: function(data, type, row) {
                    const mapping = {1: 'Добавлен', 2: 'Удален', 3: 'Повышен', 4: 'Понижен', 5: 'Неизменен'};
                    return mapping[data] || data;
                }},
            { data: 'previous_assm', title: 'Сборка (пред.)' },
            { data: 'previous_desc', title: 'Описание (пред.)' },
            { data: 'previous_version', title: 'Версия (пред.)' },
            { data: 'previous_time', title: 'Время (пред.)' },
            { data: 'current_assm', title: 'Сборка (тек.)' },
            { data: 'current_desc', title: 'Описание (тек.)' },
            { data: 'current_version', title: 'Версия (тек.)' },
            { data: 'current_time', title: 'Время (тек.)' }
        ],
        afterLoad: function() {
            // Инициализируем панель фильтров для сравнения сборок
            initializeCompareFilterPanel();
        }
    }

];

let currentCVEData = {
    tracker: {
        name: '',
        description: ''
    },
    bdu: {
        vul_ident: '',
        vul_desc: '',
        date_discovered: '',
        cvss2_vector: '',
        cvss2_score: null,
        cvss3_vector: '',
        cvss3_score: null
    }
};
let currentTab = 'tracker';

const urgencyMap = {
    'not yet assigned': 1 << 0, // 1
    'unimportant': 1 << 1,       // 2
    'low': 1 << 2,              // 4
    'medium': 1 << 3,           // 8
    'high': 1 << 4,             // 16
    'end-of-life': 1 << 5       // 32
};

const statusMap = {
    'resolved': 1 << 0,  // 1
    'open': 1 << 1,    // 2
    'undetermined': 1 << 2,   // 4
};

const severityMap = {
    'undefined': 1 << 0,   // 1
    'unknown': 1 << 1,     // 2
    'low': 1 << 2,         // 4
    'medium': 1 << 3,      // 8
    'high': 1 << 4,        // 16
    'critical': 1 << 5,    // 32
};


// Объект для хранения названий проектов, дат создания сборок и названий пакетов
const contextData = {
    projectNames: {}, // Хранит название проектов по их ID
    assemblyDates: {}, // Хранит даты создания сборок по их ID
    packageNames: {} // Хранит названия пакетов и версии по их ID
};

var table;
var vulnerabilitiesButton;
var nextLevelButton;

document.addEventListener('DOMContentLoaded', function () {

    function updateContent() {
        const hash = window.location.hash.substring(1) || 'projects';

        // Скрываем панели CVE по умолчанию
        document.getElementById('cve-panels').style.display = 'none';
        // clearDataPanel();

        const isCVEPage = hash.startsWith('cve');
        if (isCVEPage) {
            const selectedRow = table?.row({ selected: true }).data();

            if (!selectedRow) {
                clearDataPanel();
                resetCurrentCVEData();
            } else {
                updateDataPanel(selectedRow);
            }
        } else {
            clearDataPanel();
            resetCurrentCVEData();
        }

        const matchedRoute= routeMap.find(route => route.pattern.test(hash));

        const match = getCurrentRoute(hash);
        if (!match) {
            showErrorMessage();
            return;
        }

        const currentRoute= match.route;
        const currentParams = match.params;

        const dataUrl = currentRoute.dataUrl ? currentRoute.dataUrl(currentParams) : null;
        if (!dataUrl) {
            showErrorMessage();
            return;
        }

        // const breadcrumbLinks = currentRoute.updateLinks(currentParams);
        // updateNavigationLinks(breadcrumbLinks);

        const breadcrumbLinks = document.getElementById('breadcrumb-links');
        const savedBreadcrumbs = localStorage.getItem('breadcrumbs');
        if (breadcrumbLinks && savedBreadcrumbs) {
            breadcrumbLinks.innerHTML = JSON.parse(savedBreadcrumbs).join(' / ');
        }

        if (currentRoute.afterLoad) {
            currentRoute.afterLoad();
        }

        if (matchedRoute) {
            const match = hash.match(matchedRoute.pattern);
            const updateLinks = typeof matchedRoute.updateLinks === 'function' ? matchedRoute.updateLinks(match) : matchedRoute.updateLinks;
            updateNavigationLinks(updateLinks);

            // const columns = matchedRoute.tableColumns;

            // Получаем состояние чекбокса "Совместные"
            const includeJointCheckbox = document.getElementById('includeJoint');
            let includeJoint = 'false';
            if (includeJointCheckbox) {
                includeJoint = includeJointCheckbox.checked ? 'true' : 'false';
            }

            // Определяем колонки для таблицы
            let columns;

            const parts = hash.split('/');

            if (parts[0] === 'projects' && parts.length === 7 && parts[4] === 'packages' && parts[6] === 'changelog') {
                columns = matchedRoute.tableColumns;
            } else if (parts[0] === 'projects' && parts.length === 5 && parts[4] === 'package') {
                // На странице пакетов используем специальные колонки
                columns = [
                    { data: 'pkg_vrs_id', title: 'Package Version ID', visible: false },
                    { data: 'pkg_name', title: 'Package Name', className: 'package-name' },
                    { data: 'version', title: 'Version' },
                    { data: 'author_name', title: 'Author' },
                    { data: 'pkg_date_created', title: 'Date Created' },
                ];

                // Если чекбокс "Совместные" выбран, добавляем дополнительные колонки
                if (includeJoint === 'true') {
                    columns.push(
                        { data: 'assm_date_created', title: 'Assembly Time' },
                        { data: 'assm_desc', title: 'Assembly Description' }
                    );
                }
            } else if (parts[0] === 'cve'){
                columns = matchedRoute.tableColumns;

                document.getElementById('cve-panels').style.display = 'block';
                document.getElementById('cve-data-panel').style.display = 'flex';
                document.getElementById('cve-data-panel').style.justifyContent = 'center';

                initializeFilterPanel();
            } else if (parts[0] === 'projects' && parts.length === 7 && parts[4] === 'package' && parts[6] === 'vulnerabilities') {
                columns = matchedRoute.tableColumns;

                document.getElementById('cve-panels').style.display = 'block';
                document.getElementById('cve-data-panel').style.display = 'flex';
                document.getElementById('cve-data-panel').style.justifyContent = 'center';

                initializeFilterPanel();
            } else {
                columns = matchedRoute.tableColumns;

                document.getElementById('cve-panels').style.display = 'none';
            }

            // // Показать кнопку "Vulnerabilities" только на странице пакетов
            // if (parts[0] === 'projects' && parts.length === 5 && parts[4] === 'package') {
            //     table.button('Vulnerabilities:name').show();
            // } else {
            //     table.button('Vulnerabilities:name').hide();
            // }

            // Перед инициализацией таблицы уничтожаем предыдущую
            if ($.fn.DataTable.isDataTable('#data-table')) {
                $('#data-table').DataTable().destroy();
            }

            $('#data-table').empty();
            // Инициализация DataTable с серверной обработкой
            table = $('#data-table').DataTable({
                serverSide: true,
                ajax: function(data, callback, settings) {
                    // let url = '';
                    //
                    // if (parts[0] === 'projects') {
                    //     if (parts.length === 1) {
                    //         url = '/projects';
                    //     } else if (parts.length === 3 && parts[2] === 'assembly') {
                    //         const projectId = parts[1];
                    //         url = `/projects/${projectId}/assembly`;
                    //     } else if (parts.length === 5 && parts[4] === 'package') {
                    //         const projectId = parts[1];
                    //         const assemblyId = parts[3];
                    //         url = `/projects/${projectId}/assembly/${assemblyId}/package`;
                    //     } else if (parts.length === 7 && parts[4] === 'package' && parts[6] === 'changelog') {
                    //         const projectId = parts[1];
                    //         const assemblyId = parts[3];
                    //         const packageId = parts[5];
                    //         url = `/projects/${projectId}/assembly/${assemblyId}/package/${packageId}/changelog`;
                    //     } else if (parts.length === 7 && parts[4] === 'package' && parts[6] === 'vulnerabilities') {
                    //         const projectId = parts[1];
                    //         const assemblyId = parts[3];
                    //         const packageVersionId = parts[5];
                    //         url = `/projects/${projectId}/assembly/${assemblyId}/package/${packageVersionId}/vulnerabilities`;
                    //     }
                    // } else if (hash === 'cve') {
                    //     url = '/cve';
                    // }
                    //
                    // const includeJointCheckbox = document.getElementById('includeJoint');
                    // let includeJoint = 'false';
                    // if (includeJointCheckbox) {
                    //     includeJoint = includeJointCheckbox.checked ? 'true' : 'false';
                    // }
                    //
                    // // Получаем параметры сортировки
                    // const orderColumnIndex = data.order[0].column;
                    // const orderDir = data.order[0].dir;
                    // const orderColumnName = data.columns[orderColumnIndex].data;
                    //
                    // let fullUrl = `http://0.0.0.0:8000${url}?start=${data.start}&length=${data.length}` +
                    //     `&search[value]=${encodeURIComponent(data.search.value)}` +
                    //     `&order_column=${orderColumnName}&order_dir=${orderDir}`;

                    const hash = window.location.hash.substr(1);
                    const parts = hash.split('/');

                    let fullUrl = `http://0.0.0.0:8000${dataUrl}?start=${data.start}&length=${data.length}` +
                        `&order_column=${data.columns[data.order[0].column].data}&order_dir=${data.order[0].dir}`;
                    // `&search[value]=${encodeURIComponent(data.search.value)}` +

                    // if (hash === 'cve' || (parts[0] === 'projects' && parts.length === 7 && parts[4] === 'package' && parts[6] === 'vulnerabilities')) {
                    //     const filters = getCVEFilters();
                    //     if (filters) {
                    //         fullUrl += `&${filters}`;
                    //     }
                    //     console.log(fullUrl)
                    // } else {
                    //     const includeJointCheckbox = document.getElementById('includeJoint');
                    //     let includeJoint = 'false';
                    //     if (includeJointCheckbox) {
                    //         includeJoint = includeJointCheckbox.checked ? 'true' : 'false';
                    //     }
                    //     fullUrl += `&include_joint=${includeJoint}`;
                    // }

                    // Получаем значение пользовательского поиска
                    const searchValue = document.getElementById('custom-search-input').value;
                    if (searchValue) {
                        fullUrl += `&search[value]=${encodeURIComponent(searchValue)}`;
                    }

                    // Если есть фильтры, добавляем их
                    const filters = getCVEFilters();
                    if (filters) {
                        fullUrl += `&${filters}`;
                    }

                    const isPackagePage = parts[0] === 'projects' && parts.length === 5 && parts[4] === 'package';
                    if (isPackagePage) {
                        const includeJointCheckbox = document.getElementById('includeJoint');
                        let includeJoint = 'false';
                        if (includeJointCheckbox) {
                            includeJoint = includeJointCheckbox.checked ? 'true' : 'false';
                        }
                        fullUrl += `&include_joint=${includeJoint}`;
                    }

                    fetch(fullUrl)
                        .then(response => response.json())
                        .then(responseData => {
                            const tableData = responseData.data;
                            const totalRecords = responseData.recordsTotal;
                            const filteredRecords = responseData.recordsFiltered;
                            console.log('Fetched Data:', responseData);

                            callback({
                                draw: data.draw,
                                recordsTotal: totalRecords,
                                recordsFiltered: filteredRecords,
                                data: tableData
                            });
                        })
                        .catch(error => {
                            console.error('Error fetching data:', error);
                            callback({
                                draw: data.draw,
                                recordsTotal: 0,
                                recordsFiltered: 0,
                                data: []
                            });
                        });
                },
                columns: currentRoute.tableColumns.map(column => {
                    if (column.data.endsWith('_id')) {
                        column.visible = false; // Скрываем столбец с ID
                    }
                    return column;
                }),
                // drawCallback: function(settings) {
                //     mergeCells(this.api());
                // },
                paging: true,
                select: {
                    style: 'single'
                },
                pageLength: 15,
                lengthMenu: [5, 10, 25, 50, 100],
                ordering: true,
                searching: false,
                destroy: true, // Разрушает предыдущую инициализацию перед новой
                dom: 'Bfrtip',
                createdRow: function(row, data, dataIndex) {
                    if (data.severity_level) {
                        const color = getColorBySeverityLevel(data.severity_level);
                        $(row).css('color', color);
                    }
                },
                buttons: [
                    {
                        extend: 'collection',
                        text: '<i class="fas fa-download"></i> Export',
                        autoClose: true,
                        // buttons: [
                        //     {
                        //         text: 'Export Current Page to CSV',
                        //         action: function (e, dt, button, config) {
                        //             const visibleColumns = dt.columns(':visible').indexes().toArray();
                        //             const headers = visibleColumns.map(index => dt.column(index).header().innerText);
                        //             const data = dt.rows({ page: 'current' }).indexes().toArray().map(rowIdx => {
                        //                 return visibleColumns.map(colIdx => {
                        //                     return dt.cell(rowIdx, colIdx).data();
                        //                 });
                        //             });
                        //
                        //             const csv = Papa.unparse({
                        //                 fields: headers,
                        //                 data: data
                        //             });
                        //
                        //             const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
                        //             const link = document.createElement('a');
                        //             link.href = URL.createObjectURL(blob);
                        //             link.download = 'current_page.csv';
                        //             document.body.appendChild(link);
                        //             link.click();
                        //             document.body.removeChild(link);
                        //
                        //             dt.buttons('.buttons-collection').collection(false);
                        //         }
                        //     },
                        //     // Экспорт всех данных в CSV
                        //     {
                        //         text: 'Export All Data to CSV',
                        //         action: function (e, dt, button, config) {
                        //             const hash = window.location.hash.substr(1);
                        //             const parts = hash.split('/');
                        //             let url = '';
                        //             let projectId, assemblyId;
                        //
                        //             if (parts[0] === 'projects') {
                        //                 if (parts.length === 5 && parts[4] === 'package') {
                        //                     projectId = parts[1];
                        //                     assemblyId = parts[3];
                        //                     const includePreviousPackages = document.getElementById('includeJoint').checked ? 'true' : 'false';
                        //                     url = `http://0.0.0.0:8000/projects/${projectId}/assembly/${assemblyId}/package?export_all=true&format=csv&include_previous=${includePreviousPackages}`;
                        //                 }
                        //             }
                        //
                        //             window.location = url;
                        //         }
                        //     },
                        //     // Экспорт текущей страницы в Excel
                        //     {
                        //         text: 'Export Current Page to Excel',
                        //         action: function (e, dt, button, config) {
                        //             const visibleColumns = dt.columns(':visible').indexes().toArray();
                        //             const headers = visibleColumns.map(index => dt.column(index).header().innerText);
                        //             const data = dt.rows({ page: 'current' }).indexes().toArray().map(rowIdx => {
                        //                 const rowData = {};
                        //                 visibleColumns.forEach((colIdx, i) => {
                        //                     const cellData = dt.cell(rowIdx, colIdx).data();
                        //                     rowData[headers[i]] = cellData;
                        //                 });
                        //                 return rowData;
                        //             });
                        //
                        //             const worksheet = XLSX.utils.json_to_sheet(data);
                        //             const workbook = XLSX.utils.book_new();
                        //             XLSX.utils.book_append_sheet(workbook, worksheet, 'Current Page');
                        //             XLSX.writeFile(workbook, 'current_page.xlsx');
                        //
                        //             // Закрываем выпадающий список
                        //             dt.buttons('.buttons-collection').collection(false);
                        //         }
                        //     },
                        //     // Экспорт всех данных в Excel
                        //     {
                        //         text: 'Export All Data to Excel',
                        //         action: function (e, dt, button, config) {
                        //             const hash = window.location.hash.substr(1);
                        //             const parts = hash.split('/');
                        //             let url = '';
                        //             let projectId, assemblyId;
                        //
                        //             if (parts[0] === 'projects') {
                        //                 if (parts.length === 5 && parts[4] === 'package') {
                        //                     projectId = parts[1];
                        //                     assemblyId = parts[3];
                        //                     const includePreviousPackages = document.getElementById('includeJoint').checked ? 'true' : 'false';
                        //                     url = `http://0.0.0.0:8000/projects/${projectId}/assembly/${assemblyId}/package?export_all=true&format=excel&include_previous=${includePreviousPackages}`;
                        //                 }
                        //             }
                        //
                        //             window.location = url;
                        //         }
                        //     },
                        //     // Экспорт текущей страницы в PDF
                        //     {
                        //         text: 'Export Current Page to PDF',
                        //         action: function (e, dt, button, config) {
                        //             const visibleColumns = dt.columns(':visible').indexes().toArray();
                        //             const headers = visibleColumns.map(index => dt.column(index).header().innerText);
                        //             const data = dt.rows({ page: 'current' }).indexes().toArray().map(rowIdx => {
                        //                 return visibleColumns.map(colIdx => {
                        //                     return dt.cell(rowIdx, colIdx).data();
                        //                 });
                        //             });
                        //
                        //             const doc = new window.jspdf.jsPDF();
                        //
                        //             doc.autoTable({
                        //                 head: [headers],
                        //                 body: data
                        //             });
                        //             doc.save('current_page.pdf');
                        //
                        //             dt.buttons('.buttons-collection').collection(false);
                        //         }
                        //     },
                        //     // Экспорт всех данных в PDF
                        //     {
                        //         text: 'Export All Data to PDF',
                        //         action: function (e, dt, button, config) {
                        //             const hash = window.location.hash.substr(1);
                        //             const parts = hash.split('/');
                        //             let url = '';
                        //             let projectId, assemblyId;
                        //
                        //             if (parts[0] === 'projects') {
                        //                 if (parts.length === 5 && parts[4] === 'package') {
                        //                     projectId = parts[1];
                        //                     assemblyId = parts[3];
                        //                     const includePreviousPackages = document.getElementById('includeJoint').checked ? 'true' : 'false';
                        //                     url = `http://0.0.0.0:8000/projects/${projectId}/assembly/${assemblyId}/package?export_all=true&format=pdf&include_previous=${includePreviousPackages}`;
                        //                 }
                        //             }
                        //
                        //             window.location = url;
                        //         }
                        //     },
                        //     // Печать текущей страницы
                        //     {
                        //         text: 'Print Current Page',
                        //         action: function (e, dt, button, config) {
                        //             dt.button('.buttons-print').trigger();
                        //
                        //             // Закрываем выпадающий список
                        //             dt.buttons('.buttons-collection').collection(false);
                        //         }
                        //     },
                        //     // Печать всех данных
                        //     {
                        //         text: 'Print All Data',
                        //         action: function (e, dt, button, config) {
                        //             const hash = window.location.hash.substr(1);
                        //             const parts = hash.split('/');
                        //             let url = '';
                        //             let projectId, assemblyId;
                        //
                        //             if (parts[0] === 'projects') {
                        //                 if (parts.length === 5 && parts[4] === 'package') {
                        //                     projectId = parts[1];
                        //                     assemblyId = parts[3];
                        //                     const includePreviousPackages = document.getElementById('includeJoint').checked ? 'true' : 'false';
                        //                     url = `http://0.0.0.0:8000/projects/${projectId}/assembly/${assemblyId}/package?export_all=true&format=print&include_previous=${includePreviousPackages}`;
                        //                 }
                        //             }
                        //
                        //             window.open(url, '_blank');
                        //
                        //             // Закрываем выпадающий список
                        //             dt.buttons('.buttons-collection').collection(false);
                        //         }
                        //     }
                        // ]

                        buttons: [
                            // Экспорт текущей страницы в CSV
                            {
                                text: 'Export Current Page to CSV',
                                action: function (e, dt, button, config) {
                                    const visibleColumns = dt.columns(':visible').indexes().toArray();
                                    const headers = visibleColumns.map(index => dt.column(index).header().innerText);
                                    const data = dt.rows({ page: 'current' }).indexes().toArray().map(rowIdx => {
                                        return visibleColumns.map(colIdx => dt.cell(rowIdx, colIdx).data());
                                    });

                                    const csv = Papa.unparse({ fields: headers, data });
                                    downloadFile(csv, 'current_page.csv', 'text/csv;charset=utf-8;');
                                }
                            },
                            // Экспорт всех данных в CSV
                            {
                                text: 'Export All Data to CSV',
                                action: function (e, dt, button, config) {
                                    exportAllData('csv', 'all_data.csv');
                                }
                            },
                            // Экспорт текущей страницы в Excel
                            {
                                text: 'Export Current Page to Excel',
                                action: function (e, dt, button, config) {
                                    const visibleColumns = dt.columns(':visible').indexes().toArray();
                                    const headers = visibleColumns.map(index => dt.column(index).header().innerText);
                                    const data = dt.rows({ page: 'current' }).indexes().toArray().map(rowIdx => {
                                        const rowData = {};
                                        visibleColumns.forEach((colIdx, i) => {
                                            rowData[headers[i]] = dt.cell(rowIdx, colIdx).data();
                                        });
                                        return rowData;
                                    });

                                    const worksheet = XLSX.utils.json_to_sheet(data);
                                    const workbook = XLSX.utils.book_new();
                                    XLSX.utils.book_append_sheet(workbook, worksheet, 'Current Page');
                                    XLSX.writeFile(workbook, 'current_page.xlsx');
                                }
                            },
                            // Экспорт всех данных в Excel
                            {
                                text: 'Export All Data to Excel',
                                action: function (e, dt, button, config) {
                                    exportAllData('excel', 'all_data.xlsx');
                                }
                            },
                            // Экспорт текущей страницы в PDF
                            {
                                text: 'Export Current Page to PDF',
                                action: function (e, dt, button, config) {
                                    const visibleColumns = dt.columns(':visible').indexes().toArray();
                                    const headers = visibleColumns.map(index => dt.column(index).header().innerText);
                                    const data = dt.rows({ page: 'current' }).indexes().toArray().map(rowIdx => {
                                        return visibleColumns.map(colIdx => dt.cell(rowIdx, colIdx).data());
                                    });

                                    const doc = new window.jspdf.jsPDF();
                                    doc.autoTable({
                                        head: [headers],
                                        body: data
                                    });
                                    doc.save('current_page.pdf');
                                }
                            },
                            // Экспорт всех данных в PDF
                            {
                                text: 'Export All Data to PDF',
                                action: function (e, dt, button, config) {
                                    exportAllData('pdf', 'all_data.pdf');
                                }
                            },
                            // Печать текущей страницы
                            {
                                text: 'Print Current Page',
                                action: function (e, dt, button, config) {
                                    const data = dt.rows({ page: 'current' }).data().toArray();
                                    printData(data);
                                }
                            },
                            // Печать всех данных
                            {
                                text: 'Print All Data',
                                action: function (e, dt, button, config) {
                                    exportAllData('print');
                                }
                            }
                        ]
                    },
                    {
                        text: '<i class="fas fa-sync-alt"></i> Reload',
                        action: function (e, dt, node, config) {
                            dt.ajax.reload(null, false); // Перезагружает данные таблицы без сброса пагинации
                        }
                    },
                    {
                        text: getNextLevelButtonText(),
                        action: function (e, dt, node, config) {
                            const selectedRowData = dt.row('.selected').data();
                            if (!selectedRowData) {
                                alert('Пожалуйста, выберите строку для перехода.');
                                return;
                            }
                            navigateToNextLevel(selectedRowData);
                        },
                        name: 'NextLevel',
                        className: 'btn-next_level',
                        enabled: false,
                        attr: {
                            style: getNextLevelButtonText() === '' ? 'display: none;' : ''
                        }
                    },
                    {
                        text: 'Vulnerabilities',
                        name: 'Vulnerabilities',
                        className: 'btn-vulnerabilities',
                        action: function (e, dt, node, config) {
                            const selectedRowData = dt.row({ selected: true }).data();
                            if (!selectedRowData) {
                                alert('Please select a package to view vulnerabilities.');
                                return;
                            }
                            const projectId = window.location.hash.split('/')[1];
                            const assemblyId = window.location.hash.split('/')[3];
                            const packageId = selectedRowData.pkg_id;
                            const packageName = selectedRowData.pkg_name;
                            window.location.hash = `#projects/${projectId}/assembly/${assemblyId}/package/${packageName}/vulnerabilities`;
                            // window.location.hash = `#projects/${projectId}/assembly/${assemblyId}/package/${packageId}/vulnerabilities`;
                        },
                        enabled: false
                    },
                ],
            });

            var table = $('#data-table').DataTable();

            // Получаем кнопки
            vulnerabilitiesButton = table.button('Vulnerabilities:name');
            nextLevelButton = table.button('NextLevel:name');

            // Проверяем, что кнопки существуют перед их использованием
            if (vulnerabilitiesButton) {
                // Обновляем видимость кнопки "Vulnerabilities"
                if (parts[0] === 'projects' && parts.length === 5 && parts[4] === 'package') {
                    vulnerabilitiesButton.node().css('display', 'inline-block');
                } else {
                    vulnerabilitiesButton.node().css('display', 'none');
                }
            }

            if (nextLevelButton) {
                // Управляем видимостью кнопки "NextLevel"
                var nextLevelButtonText = getNextLevelButtonText();
                nextLevelButton.text(nextLevelButtonText);

                if (nextLevelButtonText === '') {
                    nextLevelButton.node().css('display', 'none');
                } else {
                    nextLevelButton.node().css('display', 'inline-block');
                }
            }

            // Изначально деактивируем кнопки
            if (vulnerabilitiesButton) vulnerabilitiesButton.disable();
            if (nextLevelButton) nextLevelButton.disable();

            // Обработчик для активации/деактивации кнопок при выборе/снятии выделения строки
            table.on('select deselect', function () {
                var selectedRows = table.rows({ selected: true }).count();
                console.log('Selected rows count:', selectedRows);
                if (selectedRows > 0) {
                    if (vulnerabilitiesButton) vulnerabilitiesButton.enable();
                    if (nextLevelButton) nextLevelButton.enable();
                } else {
                    if (vulnerabilitiesButton) vulnerabilitiesButton.disable();
                    if (nextLevelButton) nextLevelButton.disable();
                }
            });

            table.on('select', function (e, dt, type, indexes) {
                console.log('Row selected');
                if (type === 'row') {
                    const rowData = table.row(indexes[0]).data();

                    if (!rowData) {
                        console.warn('Row data is undefined');
                        return;
                    }

                    const hash = window.location.hash.substring(1);
                    const parts = hash.split('/');
                    const pageKey = getPageKeyForCurrentPage(parts);
                    const idField = getIdFieldForCurrentPage(parts);

                    if (parts[0] === 'projects' && parts.length === 1) {
                        contextData.projectNames[rowData.prj_id] = rowData.prj_name;
                    }

                    if (parts[0] === 'projects' && parts.length === 3 && parts[2] === 'assembly') {
                        contextData.assemblyDates[rowData.assm_id] = rowData.assm_date_created;
                    }

                    if (
                        parts[0] === 'cve' ||
                        (parts[0] === 'projects' && parts.length === 7 && parts[4] === 'package' && parts[6] === 'vulnerabilities')
                    ) {
                        currentTab = 'tracker';
                        document.getElementById('tracker-tab').classList.add('active');
                        document.getElementById('bdu-tab').classList.remove('active');

                        updateDataPanel(rowData);
                    }

                    if (pageKey && idField && rowData?.[idField]) {
                        const savedData = JSON.parse(localStorage.getItem('lastSelectedRows')) || {};
                        savedData[pageKey] = rowData[idField];
                        localStorage.setItem('lastSelectedRows', JSON.stringify(savedData));
                    }
                }
            });


            // function mergeCells(table) {
            //     const columnIndices = [0, 1]; // Индексы столбцов, которые нужно объединить (например, первые четыре столбца)
            //     columnIndices.forEach(function(columnIndex) {
            //         let lastValue = null;
            //         let rowspan = 1;
            //         table.column(columnIndex, {page:'current'}).nodes().each(function(cell, i) {
            //             const currentValue = $(cell).text();
            //             if (lastValue === currentValue) {
            //                 $(cell).remove(); // Удаляем повторяющуюся ячейку
            //                 rowspan++;
            //             } else {
            //                 if (rowspan > 1) {
            //                     const prevCell = table.cell({row: i - rowspan, column: columnIndex}).node();
            //                     $(prevCell).attr('rowspan', rowspan);
            //                 }
            //                 lastValue = currentValue;
            //                 rowspan = 1;
            //             }
            //         });
            //         // Обработка последнего набора ячеек
            //         if (rowspan > 1) {
            //             const prevCell = table.cell({row: table.rows({page:'current'}).count() - rowspan, column: columnIndex}).node();
            //             $(prevCell).attr('rowspan', rowspan);
            //         }
            //     });
            // }


            togglePackageCheckbox();

            // Обработка кликов и двойных кликов через DataTables API
            // Обработчик для выделения строки и сохранения названия проекта или даты сборки
            // $('#data-table tbody').on('click', 'tr', function () {
            //     const rowData = table.row(this).data();
            //
            //     const hash = window.location.hash.substring(1);
            //     const parts = hash.split('/');
            //
            //     if (parts[0] === 'projects' && parts.length === 1) {
            //         contextData.projectNames[rowData.prj_id] = rowData.prj_name;
            //     }
            //
            //     if (parts[0] === 'projects' && parts.length === 3 && parts[2] === 'assembly') {
            //         contextData.assemblyDates[rowData.assm_id] = rowData.assm_date_created;
            //     }
            //
            //     if (
            //         parts[0] === 'cve' ||
            //         (parts[0] === 'projects' && parts.length === 7 && parts[4] === 'package' && parts[6] === 'vulnerabilities')
            //     ) {
            //         currentTab = 'tracker';
            //         document.getElementById('tracker-tab').classList.add('active');
            //         document.getElementById('bdu-tab').classList.remove('active');
            //
            //         updateDataPanel(rowData);
            //     }
            // });


            $('#data-table tbody').on('dblclick', 'td', function (event) {
                const cell = $(this);
                const row = cell.closest('tr');
                const rowData = $('#data-table').DataTable().row(row).data();

                // Переход от проектов к сборкам по двойному клику на название проекта
                if (cell.hasClass('project-name')) {
                    const projectId = rowData['prj_id'];
                    window.location.hash = `#projects/${projectId}/assembly`;
                }

                // Переход от сборок к пакетам по двойному клику на название сборки
                if (cell.hasClass('assm-date')) {
                    const hash = window.location.hash.substring(1);
                    const parts = hash.split('/');
                    const projectId = parts[1];
                    const assemblyId = rowData['assm_id'];
                    window.location.hash = `#projects/${projectId}/assembly/${assemblyId}/package`;
                }

                // Переход от пакетов к changelog по двойному клику на название пакета
                if (cell.hasClass('package-name')) {
                    const projectId = window.location.hash.split('/')[1];
                    const assemblyId = window.location.hash.split('/')[3];
                    const packageId = rowData['pkg_id'];

                    contextData.packageNames[packageId] = {
                        pkg_name: rowData.pkg_name,
                        version: rowData.version
                    };

                    window.location.hash = `#projects/${projectId}/assembly/${assemblyId}/packages/${packageId}/changelog`;
                }

                // Редактирование по двойному клику на другие столбцы
                if (cell.hasClass('editable')) {
                    const originalText = cell.text();
                    const input = $('<input>', {
                        type: 'text',
                        value: originalText
                    });

                    cell.empty().append(input);
                    input.focus();

                    input.on('blur', function () {
                        const newValue = input.val();
                        cell.text(newValue);

                        const rowId = rowData['prj_id'] || rowData['assm_id'] || rowData['pkg_vrs_id'];

                        // Получаем все столбцы, включая скрытые, чтобы правильно идентифицировать измененный столбец
                        const allColumns = $('#data-table').DataTable().settings().init().columns;
                        const visibleColumnIndex = cell.index(); // Индекс видимого столбца в таблице

                        // Определяем реальный индекс столбца в массиве всех столбцов
                        let realColumnIndex = -1;
                        let visibleIndex = 0;

                        for (let i = 0; i < allColumns.length; i++) {
                            if (allColumns[i].visible === false) continue; // Пропускаем скрытые столбцы
                            if (visibleIndex === visibleColumnIndex) {
                                realColumnIndex = i;
                                break;
                            }
                            visibleIndex++;
                        }

                        // Проверяем, что получили корректный индекс
                        if (realColumnIndex === -1) {
                            console.error('Не удалось определить реальный индекс столбца.');
                            return;
                        }

                        const columnName = allColumns[realColumnIndex].data;

                        // Определяем тип ресурса на основе контекста
                        let resourceType;
                        if (rowData.hasOwnProperty('prj_id')) {
                            resourceType = 'project';
                        } else if (rowData.hasOwnProperty('assm_id')) {
                            resourceType = 'assembly';
                        } else if (rowData.hasOwnProperty('pkg_vrs_id')) {
                            resourceType = 'package';
                        }

                        // Отправка запроса на сервер с правильным столбцом
                        updateServerData(rowId, columnName, newValue, resourceType);
                    });



                    input.on('keydown', function (event) {
                        if (event.key === 'Enter') {
                            input.blur();
                        }
                    });
                }
            });

        } else {
            showErrorMessage();
        }
    }

    $('#data-table').on('init.dt', function () {
        const table = $('#data-table').DataTable();
        const hash = window.location.hash.substring(1);
        const parts = hash.split('/');

        const isVulnerabilityPage = parts[0] === 'cve' ||
            (parts[0] === 'projects' && parts.length === 7 && parts[4] === 'package' && parts[6] === 'vulnerabilities');

        const pageKey = getPageKeyForCurrentPage(parts);
        const idField = getIdFieldForCurrentPage(parts);
        const savedData = JSON.parse(localStorage.getItem('lastSelectedRows')) || {};
        const lastSelectedRowId = savedData[pageKey];

        console.log('Current Page Parts:', parts);
        console.log('ID Field:', idField);

        if (isVulnerabilityPage) {
            const firstRow = table.row(':eq(0)', { page: 'current' });
            if (firstRow.length) {
                firstRow.select();
            }
        } else if (lastSelectedRowId && idField) {
            const rowIndex = table.rows().eq(0).filter(function (rowIdx) {
                const rowData = table.row(rowIdx).data();
                return rowData && rowData[idField] === lastSelectedRowId;
            });

            if (rowIndex.length) {
                const pageIndex = Math.floor(rowIndex[0] / table.page.len());
                table.page(pageIndex).draw(false);
                table.row(rowIndex[0]).select();
            } else {
                console.warn('Row with the last selected ID was not found.');
            }
        }
    });

    window.addEventListener('hashchange', function() {
        const hash = window.location.hash.substring(1);
        const parts = hash.split('/');

        const isVulnerabilityPage = parts[0] === 'cve' ||
            (parts[0] === 'projects' && parts.length === 7 && parts[4] === 'package' && parts[6] === 'vulnerabilities');

        if (!isVulnerabilityPage) {
            clearDataPanel();
        }

        updateContent();
        togglePackageCheckbox();

        // var vulnerabilitiesButton = table.button('.btn-vulnerabilities');
        // var vulnerabilitiesButtonNode = vulnerabilitiesButton ? vulnerabilitiesButton.node() : null;
        //
        // // Обновляем текст кнопки и её видимость
        // var nextLevelButton = table.button('.btn-next_level');
        // var nextLevelButtonNode = nextLevelButton ? nextLevelButton.node() : null;
        //
        // const hash = window.location.hash.substring(1);
        // const parts = hash.split('/');
        // var nextLevelButtonText = getNextLevelButtonText();
        //
        // nextLevelButton.text(nextLevelButtonText);
        // if (nextLevelButtonText === '') {
        //     $(nextLevelButtonNode).css('display', 'none');
        // } else {
        //     $(nextLevelButtonNode).css('display', 'inline-block');
        //
        // }
        //
        // // Обновляем видимость кнопки "Vulnerabilities" в зависимости от текущего URL
        // if (parts[0] === 'projects' && parts.length === 5 && parts[4] === 'package') {
        //     $(vulnerabilitiesButtonNode).css('display', 'inline-block');
        // } else {
        //     $(vulnerabilitiesButtonNode).css('display', 'none');
        // }

    });

    updateContent();
    togglePackageCheckbox();

    flatpickr("#date_discovered_start", { dateFormat: "Y-m-d" });

    flatpickr("#date_discovered_end", { dateFormat: "Y-m-d" });

    const menuButton = document.getElementById('menu-button');
    const menuDropdown = document.getElementById('menu-dropdown');
    const menuCVE = document.getElementById('menu-cve');
    const menuStats = document.getElementById('menu-stats');

    menuButton.addEventListener('click', function(event) {
        event.stopPropagation();
        menuDropdown.style.display = menuDropdown.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', function(event) {
        if (!menuButton.contains(event.target)) {
            menuDropdown.style.display = 'none';
        }
    });

    menuCVE.addEventListener('click', function(event) {
        event.preventDefault();
        menuDropdown.style.display = 'none';
        window.location.hash = '#cve';
    });

    menuStats.addEventListener('click', function(event) {
        event.preventDefault();
        menuDropdown.style.display = 'none';
        openStatsModal();
    });

    document.getElementById('filter-toggle-button').addEventListener('click', function() {
        document.getElementById('cve-filter-panel').classList.toggle('open');
        document.getElementById('filter-toggle-button').classList.toggle('filter-toggle-button_open');
    });

    document.getElementById('custom-search-button').addEventListener('click', function() {
        const searchValue = document.getElementById('custom-search-input').value;
        const table = $('#data-table').DataTable();
        table.search(searchValue).draw();
    });

    document.getElementById('tracker-tab').addEventListener('click', function() {
        // const selectedRow = table?.row({ selected: true }).data();
        // if (!selectedRow) {
        //     clearDataPanel();
        //     return;
        // }

        currentTab = 'tracker';
        document.getElementById('tracker-tab').classList.add('active');
        document.getElementById('bdu-tab').classList.remove('active');
        updateDescriptionPanel();
    });

    document.getElementById('bdu-tab').addEventListener('click', function() {
        // const selectedRow = table?.row({ selected: true }).data();
        // if (!selectedRow) {
        //     clearDataPanel();
        //     return;
        // }

        currentTab = 'bdu';
        document.getElementById('bdu-tab').classList.add('active');
        document.getElementById('tracker-tab').classList.remove('active');
        updateDescriptionPanel();
    });

    const includeJointPackages = document.getElementById('includeJoint');
    if (includeJointPackages) {
        includeJointPackages.addEventListener('change', function() {
            // $('#data-table').DataTable().ajax.reload(null, false);
            updateContent();
        });
    }

    const applyFiltersButton = document.getElementById('apply-filters-button');
    if (applyFiltersButton) {
        applyFiltersButton.addEventListener('click', function() {
            const table = $('#data-table').DataTable();
            table.ajax.reload();
        });
    }

    updateFooterDates();
})

function getCVEFilters() {
    const form = document.getElementById('cve-filters-form');
    const formData = new FormData(form);

    let urgencyValue = 0;
    let statusValue = 0;
    let severityValue = 0;

    const params = new URLSearchParams();

    for (let [key, value] of formData.entries()) {
        if (key === 'urgency') {
            urgencyValue |= urgencyMap[value];
        } else if (key === 'status') {
            statusValue |= statusMap[value];
        } else if (key === 'severity_level') {
            severityValue |= severityMap[value];
        } else {
            if (value) {
                params.append(key, value);
            }
        }

    }

    if (urgencyValue) params.append('urgency', urgencyValue);
    if (statusValue) params.append('status', statusValue);
    if (severityValue) params.append('severity_level', severityValue);

    console.log('Filters:', params.toString());
    return params.toString();
}

function initializeCompareFilterPanel() {
    // Фильтр по состоянию (чекбоксы с именем "compare_state_filter")
    const stateFilters = document.querySelectorAll('input[name="compare_state_filter"]');
    stateFilters.forEach(function(input) {
        input.addEventListener('change', function() {
            $('#data-table').DataTable().ajax.reload();
        });
    });

    // Фильтры для флага "Совместная сборка"
    const includeJointCurrentInput = document.getElementById('include_joint_current');
    const includeJointPreviousInput = document.getElementById('include_joint_previous');
    if (includeJointCurrentInput) {
        includeJointCurrentInput.addEventListener('change', function() {
            $('#data-table').DataTable().ajax.reload();
        });
    }
    if (includeJointPreviousInput) {
        includeJointPreviousInput.addEventListener('change', function() {
            $('#data-table').DataTable().ajax.reload();
        });
    }

    // Кнопка "Применить" в панели фильтров
    const compareFilterApply = document.getElementById('compare-filter-apply');
    if (compareFilterApply) {
        compareFilterApply.addEventListener('click', function() {
            $('#data-table').DataTable().ajax.reload();
        });
    }
}


function updateDataPanel(rowData) {
    if (!rowData) return;

    // Сохраняем данные CVE из дебтракера
    currentCVEData.tracker.name = rowData.cve_name;
    currentCVEData.tracker.description = rowData.cve_desc || 'Описание недоступно';

    // Сбрасываем текущую вкладку на 'tracker' при выборе новой CVE
    currentTab = 'tracker';
    document.getElementById('tracker-tab').classList.add('active');
    document.getElementById('bdu-tab').classList.remove('active');

    // Обновляем панель с данными из дебтракера
    updateDescriptionPanel();

    // Запрашиваем данные из BDU
    fetchBDUData(rowData.cve_name);
    fetchCVELinks(rowData.cve_name);
}

function fetchBDUData(cveName) {
    const url = `http://0.0.0.0:8000/bdu?cve_name=${encodeURIComponent(cveName)}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            currentCVEData.bdu.vul_ident = data.vul_ident || 'Недоступно';
            currentCVEData.bdu.vul_desc = data.vul_desc || 'Описание недоступно';
            currentCVEData.bdu.date_discovered = data.date_discovered || 'Недоступно';
            currentCVEData.bdu.cvss2_vector = data.cvss2_vector || 'Недоступно';
            currentCVEData.bdu.cvss2_score = data.cvss2_score !== null ? data.cvss2_score : 'Недоступно';
            currentCVEData.bdu.cvss3_vector = data.cvss3_vector || 'Недоступно';
            currentCVEData.bdu.cvss3_score = data.cvss3_score !== null ? data.cvss3_score : 'Недоступно';


            // После получения данных обновляем панель, если текущая вкладка BDU
            if (currentTab === 'bdu') {
                updateDescriptionPanel();
            }
        })
        .catch(error => {
            // Обработка ошибок
            currentCVEData.bdu.vul_ident = 'Недоступно';
            currentCVEData.bdu.vul_desc = 'Описание недоступно';
            currentCVEData.bdu.date_discovered = 'Недоступно';
            currentCVEData.bdu.cvss2_vector = 'Недоступно';
            currentCVEData.bdu.cvss2_score = 'Недоступно';
            currentCVEData.bdu.cvss3_vector = 'Недоступно';
            currentCVEData.bdu.cvss3_score = 'Недоступно';

            if (currentTab === 'bdu') {
                updateDescriptionPanel();
            }
        });
}


function updateDescriptionPanel() {
    const titleElement = document.getElementById('cve-title');
    const titleLink = document.getElementById('cve-title-link');
    const descriptionTextarea = document.getElementById('textarea-cve-description');
    const bduAdditionalInfo = document.getElementById('bdu-additional-info');
    const bduDateDiscovered = document.getElementById('bdu-date-discovered');
    const cvss2Header = document.getElementById('cvss2-header');
    const cvss3Header = document.getElementById('cvss3-header');

    if (!currentCVEData || !currentCVEData.tracker || !currentCVEData.bdu) {
        clearDataPanel();
        return;
    }

    if (currentTab === 'tracker') {
        if (titleElement) titleElement.textContent = currentCVEData.tracker.name || 'No CVE Selected';
        if (titleLink) {
            titleLink.textContent = currentCVEData.tracker.name || '';
            titleLink.href = currentCVEData.tracker.name
                ? `https://security-tracker.debian.org/tracker/${currentCVEData.tracker.name}`
                : '#';
        }
        if (descriptionTextarea) {
            descriptionTextarea.value = currentCVEData.tracker.description || 'Description not available';
        }
        if (bduAdditionalInfo) {
            bduAdditionalInfo.style.display = 'none';
        }
    } else if (currentTab === 'bdu') {
        const vulIdentLinkPart = currentCVEData.bdu.vul_ident.substring(4) || '';
        if (titleElement) titleElement.textContent = currentCVEData.bdu.vul_ident || 'No CVE Selected';
        if (titleLink) {
            titleLink.textContent = currentCVEData.bdu.vul_ident || '';
            titleLink.href = vulIdentLinkPart
                ? `https://bdu.fstec.ru/vul/${vulIdentLinkPart}`
                : '#';
        }
        if (descriptionTextarea) {
            descriptionTextarea.value = currentCVEData.bdu.vul_desc || 'Description not available';
        }
        if (bduAdditionalInfo) {
            bduAdditionalInfo.style.display = 'block';
        }
        if (bduDateDiscovered) {
            bduDateDiscovered.textContent = currentCVEData.bdu.date_discovered || 'Unknown';
        }

        // Обновляем CVSS2 заголовок
        if (cvss2Header && currentCVEData.bdu.cvss2_vector && currentCVEData.bdu.cvss2_vector !== 'Недоступно') {
            const color = getColorByScore(currentCVEData.bdu.cvss2_score);
            cvss2Header.innerHTML = '';

            const cvss2Link = document.createElement('a');
            cvss2Link.href = `http://bdu.fstec.ru/calc?bs=${encodeURIComponent(currentCVEData.bdu.cvss2_vector)}`;
            cvss2Link.target = '_blank';
            cvss2Link.textContent = `CVSS2 (${currentCVEData.bdu.cvss2_score})`;
            cvss2Link.style.color = color;
            cvss2Link.style.textDecoration = 'none';

            cvss2Header.appendChild(cvss2Link);
        } else if (cvss2Header) {
            cvss2Header.textContent = 'Undefined';
            cvss2Header.style.color = '#2d3748';
        }

        // Обновляем CVSS3 заголовок
        if (cvss3Header && currentCVEData.bdu.cvss3_vector && currentCVEData.bdu.cvss3_vector !== 'Недоступно') {
            const color = getColorByScore(currentCVEData.bdu.cvss3_score);
            cvss3Header.innerHTML = '';

            const cvss3Link = document.createElement('a');
            cvss3Link.href = `http://bdu.fstec.ru/calc3?bs=${encodeURIComponent(currentCVEData.bdu.cvss3_vector)}`;
            cvss3Link.target = '_blank';
            cvss3Link.textContent = `CVSS3 (${currentCVEData.bdu.cvss3_score})`;
            cvss3Link.style.color = color;
            cvss3Link.style.textDecoration = 'none';

            cvss3Header.appendChild(cvss3Link);
        } else if (cvss3Header) {
            cvss3Header.textContent = 'Undefined';
            cvss3Header.style.color = '#2d3748';
        }
    }
}

function resetCurrentCVEData() {
    currentCVEData = {
        tracker: {
            name: '',
            description: ''
        },
        bdu: {
            vul_ident: '',
            vul_desc: '',
            date_discovered: '',
            cvss2_vector: '',
            cvss2_score: null,
            cvss3_vector: '',
            cvss3_score: null
        }
    };
}

function getColorByScore(score) {
    if (score >= 4.0 && score <= 6.9) {
        return '#e83e8c';
    } else if (score >= 7.0 && score <= 9.9) {
        return '#d56202';
    } else if (score === "10.0") {
        return 'red';
    } else {
        return '#2d3748';
    }
}

function getColorBySeverityLevel(severityLevel) {
    switch (severityLevel.toLowerCase()) {
        case 'medium':
            return '#e83e8c';
        case 'high':
            return '#d56202';
        case 'critical':
            return 'red';
        default:
            return '#2d3748';
    }
}

function getPageKeyForCurrentPage(parts) {
    if (parts[0] === 'projects' && parts.length === 1) {
        return 'projects';
    } else if (parts[0] === 'projects' && parts.length === 3 && parts[2] === 'assembly') {
        return `projects/${parts[1]}/assembly`;
    } else if (parts[0] === 'projects' && parts.length === 5 && parts[4] === 'package') {
        return `projects/${parts[1]}/assembly/${parts[3]}/package`;
    } else if (parts[0] === 'cve') {
        return 'cve';
    } else if (parts[0] === 'projects' && parts.length === 7 && parts[4] === 'package' && parts[6] === 'vulnerabilities') {
        return `projects/${parts[1]}/assembly/${parts[3]}/package/${parts[5]}/vulnerabilities`;
    }
    return null;
}

function getIdFieldForCurrentPage(parts) {
    if (parts[0] === 'projects' && parts.length === 1) {
        return 'prj_id'; // ID проекта
    } else if (parts[0] === 'projects' && parts.length === 3 && parts[2] === 'assembly') {
        return 'assm_id'; // ID сборки
    } else if (parts[0] === 'projects' && parts.length === 5 && parts[4] === 'package') {
        return 'pkg_vrs_id'; // ID версии пакета
    } else if (parts[0] === 'cve' || (parts[0] === 'projects' && parts.length === 7 && parts[4] === 'package' && parts[6] === 'vulnerabilities')) {
        return 'cve_name'; // Имя CVE
    }
    return null;
}

function initializeFilterPanel() {
    const form = document.getElementById('cve-filters-form');

    const inputs = form.querySelectorAll('input');
    // inputs.forEach(input => {
    //     input.addEventListener('change', function() {
    //         const table = $('#data-table').DataTable();
    //         table.ajax.reload();
    //     });
    // });
}

function fetchCVELinks(cveName) {
    fetch(`http://0.0.0.0:8000/api/cve/${encodeURIComponent(cveName)}/links`)
        .then(response => response.json())
        .then(links => {
            const linksContainer = document.getElementById('cve-links');
            linksContainer.innerHTML = ''; // Очищаем предыдущие ссылки
            links.forEach(link => {
                const linkElement = document.createElement('a');
                linkElement.href = link.url;
                linkElement.textContent = link.source_name;
                linkElement.target = '_blank';
                linksContainer.appendChild(linkElement);
            });
        })
        .catch(error => {
            console.error('Ошибка при получении ссылок для CVE:', error);
        });
}


// ----------Side Panels------------

function getCurrentRoute(hash) {
    for (const route of routeMap) {
        const match = hash.match(route.pattern);
        if (match) {
            return {
                route: route,
                params: match
            };
        }
    }
    return null;
}

function getNextLevelButtonText() {
    const hash = window.location.hash.substr(1);
    const parts = hash.split('/');

    if (parts[0] === 'projects') {
        if (parts.length === 1) {
            return 'Assemblies';
        } else if (parts.length === 3 && parts[2] === 'assembly') {
            return 'Packages';
        } else if (parts.length === 5 && parts[4] === 'package') {
            return 'Changelog';
        } else if (parts.length === 7 && parts[4] === 'packages' && parts[6] === 'changelog') {
            return '';
        }
    } else if (hash === 'cve') {
        return '';
    }
    return '';
}

function navigateToNextLevel(selectedRowData) {
    const hash = window.location.hash.substr(1);
    const parts = hash.split('/');

    if (parts[0] === 'projects') {
        if (parts.length === 1) {
            // Текущая страница - список проектов, переходим к сборкам выбранного проекта
            const projectId = selectedRowData.prj_id;
            window.location.hash = `#projects/${projectId}/assembly`;
        } else if (parts.length === 3 && parts[2] === 'assembly') {
            // Текущая страница - список сборок, переходим к пакетам выбранной сборки
            const projectId = parts[1];
            const assemblyId = selectedRowData.assm_id;
            window.location.hash = `#projects/${projectId}/assembly/${assemblyId}/package`;
        } else if (parts.length === 5 && parts[4] === 'package') {
            // Текущая страница - пакеты, переходим к changelog выбраннго пакета
            const projectId = parts[1];
            const assemblyId = parts[3];
            const packageId = selectedRowData.pkg_id;

            contextData.packageNames[packageId] = {
                pkg_name: selectedRowData.pkg_name,
                version: selectedRowData.version
            };

            window.location.hash = `#projects/${projectId}/assembly/${assemblyId}/packages/${packageId}/changelog`;
        }
    }
}

function togglePackageCheckbox() {
    const hash = window.location.hash.substr(1);
    const parts = hash.split('/');

    const packageCheckbox = document.getElementById('package-checkbox');

    if (packageCheckbox) {
        if (parts[0] === 'projects' && parts.length === 5 && parts[4] === 'package') {
            // Находимся на странице пакетов
            packageCheckbox.style.display = 'block';
        } else {
            packageCheckbox.style.display = 'none';
        }
    } else {
        console.error('Element with ID "package-checkbox" not found.');
    }
}


function updateServerData(rowId, column, value, resourceType) {
    const updateUrl = `http://0.0.0.0:8000/projects/update`;
    const data = {
        id: rowId,
        column: column,
        value: value,
        resourceType: resourceType
    };

    fetch(updateUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            console.log('Data updated successfully');
        })
        .catch(error => {
            console.error('Error updating data:', error);
        });
}

// function updateNavigationLinks(links) {
//     const breadcrumbLinks = document.getElementById('breadcrumb-links');
//
//     if (breadcrumbLinks) {
//         const hash = window.location.hash.substring(1);
//         const parts = hash.split('/');
//
//         // Формирование ссылок
//         let breadcrumbs = links.map((link, index) => {
//             let text = 'Home'; // По умолчанию
//
//             if (index === 0) { // Главная страница
//                 if (link === '#projects') {
//                     text = 'Projects';
//                 } else if (link === '#cve') {
//                     text = 'Vulnerabilities';
//                 }
//             } else if (index === 1 && parts.length >= 2) { // Страница сборок
//                 const projectId = parts[1];
//                 // text = contextData.projectNames[projectId] || `Project ${projectId}`;
//                 if (contextData.projectNames[projectId]) {
//                     text = contextData.projectNames[projectId];
//                 } else {
//                     // Если данные отсутствуют, делаем запрос к серверу
//                     fetch(`/projects/${projectId}/name`)
//                         .then(response => response.json())
//                         .then(data => {
//                             contextData.projectNames[projectId] = data.name || `Project ${projectId}`;
//                             updateNavigationLinks(links); // Повторный вызов для обновления
//                         })
//                         .catch(error => {
//                             console.error(`Failed to fetch project name for ID ${projectId}:`, error);
//                         });
//                     return `Project ${projectId}`;
//                 }
//             } else if (index === 2 && parts.length >= 4) { // Страница пакетов
//                 const assemblyId = parts[3];
//                 // text = contextData.assemblyDates[assemblyId] || `Assembly ${assemblyId}`;
//                 if (contextData.assemblyDates[assemblyId]) {
//                     text = contextData.assemblyDates[assemblyId];
//                 } else {
//                     // Если данные отсутствуют, делаем запрос к серверу
//                     fetch(`/assemblies/${assemblyId}/date`)
//                         .then(response => response.json())
//                         .then(data => {
//                             contextData.assemblyDates[assemblyId] = data.date || `Assembly ${assemblyId}`;
//                             updateNavigationLinks(links); // Повторный вызов для обновления
//                         })
//                         .catch(error => {
//                             console.error(`Failed to fetch assembly date for ID ${assemblyId}:`, error);
//                         });
//                     return `Assembly ${assemblyId}`;
//                 }
//             } else if (index === 3 && parts.length >= 6) { // Страница changelog
//                 const packageId = parts[5];
//                 // const packageInfo = contextData.packageNames[packageId];
//                 // if (packageInfo) {
//                 //     text = `${packageInfo.pkg_name}: ${packageInfo.version}`;
//                 // } else {
//                 //     text = `Package ${packageId}`;
//                 // }
//                 if (contextData.packageNames[packageId]) {
//                     const packageInfo = contextData.packageNames[packageId];
//                     text = `${packageInfo.pkg_name}: ${packageInfo.version}`;
//                 } else {
//                     // Если данные отсутствуют, делаем запрос к серверу
//                     fetch(`/packages/${packageId}/info`)
//                         .then(response => response.json())
//                         .then(data => {
//                             contextData.packageNames[packageId] = {
//                                 pkg_name: data.pkg_name || `Package ${packageId}`,
//                                 version: data.version || ''
//                             };
//                             updateNavigationLinks(links); // Повторный вызов для обновления
//                         })
//                         .catch(error => {
//                             console.error(`Failed to fetch package info for ID ${packageId}:`, error);
//                         });
//                     return `Package ${packageId}`;
//                 }
//             }
//
//             return `<a href="${link}" class="mr-2">${text}</a>`;
//         });
//
//         localStorage.setItem('breadcrumbs', JSON.stringify(breadcrumbs));
//         breadcrumbLinks.innerHTML = breadcrumbs.join(' / ');
//     } else {
//         console.error('breadcrumb-links element not found in DOM');
//     }
// }


async function updateNavigationLinks(links) {
    const breadcrumbLinks = document.getElementById('breadcrumb-links');
    if (!breadcrumbLinks) {
        console.error('breadcrumb-links element not found in DOM');
        return;
    }

    const hash = window.location.hash.substring(1);
    const parts = hash.split('/');

    // Асинхронная загрузка всех хлебных крошек
    const breadcrumbs = await Promise.all(
        links.map(async (link, index) => {
            let text = 'Home'; // Значение по умолчанию

            if (index === 0) { // Главная страница
                if (link === '#projects') {
                    text = 'Projects';
                } else if (link === '#cve') {
                    text = 'Vulnerabilities';
                }
            } else if (index === 1 && parts.length >= 2) { // Страница сборок
                const projectId = parts[1];
                if (contextData.projectNames[projectId]) {
                    text = contextData.projectNames[projectId];
                } else {
                    text = await fetchResourceInfo('projects', projectId, 'projectNames', `Project ${projectId}`);
                }
            } else if (index === 2 && parts.length >= 4) { // Страница пакетов
                const assemblyId = parts[3];
                // if (contextData.assemblyDates[assemblyId]) {
                //     text = contextData.assemblyDates[assemblyId];
                // } else {
                //     text = await fetchResourceInfo('assemblies', assemblyId, 'assemblyDates', `Assembly ${assemblyId}`);
                // }
                text = await fetchResourceInfo('assemblies', assemblyId, 'assemblyDates', `Assembly ${assemblyId}`);
            } else if (index === 3 && parts.length >= 6) { // Страница changelog
                const packageId = parts[5];
                if (contextData.packageNames[packageId]) {
                    const packageInfo = contextData.packageNames[packageId];
                    text = `${packageInfo.pkg_name}: ${packageInfo.version}`;
                } else {
                    const data = await fetchResourceInfo('packages', packageId, 'packageNames', `Package ${packageId}`);
                    text = `${data.pkg_name || `Package ${packageId}`}: ${data.version || ''}`;
                }
            }

            return `<a href="${link}" class="mr-2">${text}</a>`;
        })
    );

    localStorage.setItem('breadcrumbs', JSON.stringify(breadcrumbs));
    breadcrumbLinks.innerHTML = breadcrumbs.join(' / ');
}

// Вспомогательная функция для запроса к серверу
async function fetchResourceInfo(resource, resourceId, contextKey, defaultValue) {
    try {
        console.log(`Fetching resource info: ${resource}, ID: ${resourceId}`);
        const response = await fetch(`http://0.0.0.0:8000/${resource}/${resourceId}/info`);
        if (!response.ok) {
            throw new Error(`Failed to fetch info for ${resource} with ID ${resourceId}`);
        }
        const result = await response.json();
        const data = result.data || {};

        // Сохраняем данные в contextData
        if (resource === 'projects') {
            contextData[contextKey][resourceId] = data || defaultValue;
            return data;
        } else if (resource === 'assemblies') {
            contextData[contextKey][resourceId] = data || defaultValue;
            return data;
        } else if (resource === 'packages') {
            contextData[contextKey][resourceId] = {
                pkg_name: data.pkg_name || defaultValue,
                version: data.version || ''
            };
            return data;
        }
    } catch (error) {
        console.error(`Error fetching data for ${resource} ID ${resourceId}:`, error);
        return defaultValue;
    }
}


function openStatsModal() {
    const modal = document.getElementById('stats-modal');
    const closeButton = document.getElementById('stats-modal-close');

    // Получаем данные статистики
    fetch('http://0.0.0.0:8000/api/stats')
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                console.error('Ошибка при получении статистики:', data.error);
                return;
            }

            // Обновляем содержимое модального окна данными статистики
            const totalVulnerabilitiesElement = document.getElementById('total-vulnerabilities');
            const lastUpdateBduElement = document.getElementById('last-update-bdu-modal');
            const lastUpdateDebtrackerElement = document.getElementById('last-update-debtracker-modal');

            totalVulnerabilitiesElement.textContent = data.total_vulnerabilities;

            const lastUpdateBdu = data.last_update_bdu ? new Date(data.last_update_bdu) : null;
            const lastUpdateDebtracker = data.last_update_debtracker ? new Date(data.last_update_debtracker) : null;

            lastUpdateBduElement.textContent = lastUpdateBdu ? lastUpdateBdu.toLocaleString() : 'Недоступно';
            lastUpdateDebtrackerElement.textContent = lastUpdateDebtracker ? lastUpdateDebtracker.toLocaleString() : 'Недоступно';

            // Открываем модальное окно после получения данных
            modal.style.display = 'block';
        })
        .catch(error => {
            console.error('Ошибка при получении статистики:', error);
            // Обработка ошибки, например, показ сообщения в модальном окне
            modal.style.display = 'block';
        });

    closeButton.onclick = function() {
        modal.style.display = 'none';
    };

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
}

function clearDataPanel() {
    const titleElement = document.getElementById('cve-title');
    const titleLink = document.getElementById('cve-title-link');
    const descriptionTextarea = document.getElementById('textarea-cve-description');
    const bduAdditionalInfo = document.getElementById('bdu-additional-info');
    const bduDateDiscovered = document.getElementById('bdu-date-discovered');
    const cvss2Header = document.getElementById('cvss2-header');
    const cvss3Header = document.getElementById('cvss3-header');
    const cveLinks = document.getElementById('cve-links');

    if (titleElement) titleElement.textContent = 'No CVE Selected';
    if (titleLink) {
        titleLink.textContent = '';
        titleLink.href = '#';
    }
    if (descriptionTextarea) descriptionTextarea.value = '';
    if (bduAdditionalInfo) bduAdditionalInfo.style.display = 'none';
    if (bduDateDiscovered) bduDateDiscovered.textContent = '';
    if (cvss2Header) {
        cvss2Header.textContent = 'Undefined';
        cvss2Header.style.color = '#2d3748';
    }
    if (cvss3Header) {
        cvss3Header.textContent = 'Undefined';
        cvss3Header.style.color = '#2d3748';
    }
    if (cveLinks) cveLinks.innerHTML = '';

    console.log('Data panel cleared');
}

function exportAllData(format, filename) {
    const hash = window.location.hash.substr(1);
    const parts = hash.split('/');
    let apiUrl = 'http://0.0.0.0:8000';

    // Определяем URL API для текущей страницы
    if (parts[0] === 'projects' && parts.length === 1) {
        apiUrl += '/projects';
    } else if (parts[0] === 'projects' && parts.length === 3 && parts[2] === 'assembly') {
        apiUrl += `/projects/${parts[1]}/assembly`;
    } else if (parts[0] === 'projects' && parts.length === 5 && parts[4] === 'package') {
        apiUrl += `/projects/${parts[1]}/assembly/${parts[3]}/package`;
    } else if (parts[0] === 'projects' && parts.length === 7 && parts[4] === 'packages' && parts[6] === 'changelog') {
        apiUrl += `/projects/${parts[1]}/assembly/${parts[3]}/packages/${parts[5]}/changelog`;
    } else if (parts[0] === 'projects' && parts.length === 7 && parts[4] === 'package' && parts[6] === 'vulnerabilities') {
        apiUrl += `/projects/${parts[1]}/assembly/${parts[3]}/package/${parts[5]}/vulnerabilities`;
    } else if (parts[0] === 'cve') {
        apiUrl += '/cve';
    }


    if (!apiUrl) {
        console.error('API URL not defined for the current page.');
        return;
    }

    const includeJoint = document.getElementById('includeJoint')?.checked ? 'true' : 'false';

    fetch(`${apiUrl}?export_all=true&format=${format}&include_joint=${includeJoint}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch export data: ${response.statusText}`);
            }

            // Определяем тип ответа
            const contentDisposition = response.headers.get('Content-Disposition');
            const isAttachment = contentDisposition && contentDisposition.includes('attachment');

            if (format === 'csv' || format === 'pdf' || format === 'excel') {
                return response.blob().then(blob => ({ blob, isAttachment }));
            } else if (format === 'print') {
                return response.text();
            } else {
                throw new Error('Unsupported export format');
            }
        })
        .then(result => {
            if (format === 'csv' || format === 'pdf' || format === 'excel') {
                const blob = result.blob;
                const isAttachment = result.isAttachment;
                const fileUrl = URL.createObjectURL(blob);
                const link = document.createElement('a');

                link.href = fileUrl;
                link.download = filename || `export.${format === 'csv' ? 'csv' : format === 'pdf' ? 'pdf' : 'xlsx'}`;

                if (isAttachment) {
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    URL.revokeObjectURL(fileUrl);
                } else {
                    window.open(fileUrl, '_blank');
                }
            } else if (format === 'print') {
                printData(result);
            }
        })
        .catch(error => console.error('Export failed:', error));
}


function downloadFile(data, filename, mimeType) {
    const blob = new Blob([data], { type: mimeType });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function printData(data) {
    const printWindow = window.open('', '_blank');
    printWindow.document.write('<html><head><title>Print</title></head><body>');
    printWindow.document.write('<pre>' + JSON.stringify(data, null, 2) + '</pre>');
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
}



function updateFooterDates() {
    fetch('http://0.0.0.0:8000/api/stats')
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                console.error('Ошибка при получении дат обновления:', data.error);
                return;
            }

            const lastUpdateBdu = data.last_update_bdu ? new Date(data.last_update_bdu) : null;
            const lastUpdateDebtracker = data.last_update_debtracker ? new Date(data.last_update_debtracker) : null;
            const now = new Date();
            const threeDaysInMs = 3 * 24 * 60 * 60 * 1000;

            // Обновление даты последнего обновления BDU
            const lastUpdateBduElement = document.getElementById('last-update-bdu-footer');
            if (lastUpdateBdu) {
                lastUpdateBduElement.textContent = lastUpdateBdu.toLocaleString();
                if (now - lastUpdateBdu > threeDaysInMs) {
                    lastUpdateBduElement.style.color = 'red';
                } else {
                    lastUpdateBduElement.style.color = ''; // Сбрасываем цвет
                }
            } else {
                lastUpdateBduElement.textContent = 'Недоступно';
            }

            // Обновление даты последнего обновления Debtracker
            const lastUpdateDebtrackerElement = document.getElementById('last-update-debtracker-footer');
            if (lastUpdateDebtracker) {
                lastUpdateDebtrackerElement.textContent = lastUpdateDebtracker.toLocaleString();
                if (now - lastUpdateDebtracker > threeDaysInMs) {
                    lastUpdateDebtrackerElement.style.color = 'red';
                } else {
                    lastUpdateDebtrackerElement.style.color = '';
                }
            } else {
                lastUpdateDebtrackerElement.textContent = 'Недоступно';
            }
        })
        .catch(error => {
            console.error('Ошибка при получении дат обновления:', error);
        });
}

function showErrorMessage() {
    const mainContent = document.querySelector('main');
    mainContent.innerHTML = '<p class="text-danger">Failed to load data. Please try again later.</p>';
}
