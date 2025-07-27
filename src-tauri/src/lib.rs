// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
pub mod bluetooth;
pub mod commands;
use tauri_plugin_sql::{Builder, Migration, MigrationKind};

#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    let migrations = vec![
        Migration {
            version: 1,
            description: "create_initial_tables",
            sql: "CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT);",
            kind: MigrationKind::Up,
        }
    ];

    tauri::Builder::default()
        .plugin(tauri_plugin_sql::Builder::new().build())
        .plugin(tauri_plugin_opener::init())
        .plugin(tauri_plugin_sql::Builder::default()
            .add_migrations("sqlite:database.db", migrations)
            .build())
        .plugin(tauri_plugin_blec::init())
        .invoke_handler(tauri::generate_handler![
            // add your functions here
            // add your functions here
            // add your functions here
            bluetooth::send_bluetooth_data,
            // add your functions here
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
