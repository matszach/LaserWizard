import os


version = 0
subversion = 17
package_name = f'laser-wizard-{version}-{subversion}'

commands = [
	f'rmdir /q /s {package_name}',
	f'electron-packager app laser-wizard --platform=win32 --arch=x64 --overwrite',
	f'rename laser-wizard-win32-x64 {package_name}',
	f'cd {package_name}\\resources',
	f'asar pack app {package_name}\\resources\\app.asar',
	f'rmdir /q /s {package_name}\\resources\\app',
	f'mkdir {package_name}\\resources\\app\\assets\\images\\icons',
	f'xcopy app\\assets\\images\\icons {package_name}\\resources\\app\\assets\\images\\icons',
	f'rmdir /q /s {package_name}\\swiftshader',
	f'rmdir /q /s {package_name}\\locales',
	f'del /f {package_name}\\chrome_100_percent.pak',
	f'del /f {package_name}\\chrome_200_percent.pak',
	f'del /f {package_name}\\LICENSES.chromium.html',
	f'del /f {package_name}\\LICENSE',
	f'del /f {package_name}\\version',
	f'del /f {package_name}\\snapshot_blob.bin',
	f'del /f {package_name}\\d3dcompiler_47.dll'
]

for c in commands:
	print(f'>> {c}')
	os.system(c)
	
