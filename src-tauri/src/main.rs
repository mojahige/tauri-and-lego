#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use std::env;

#[tauri::command]
fn os_name() -> String {
    format!("{}", env::consts::OS)
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![os_name])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
