rmdir /q /s laser-wizard\resources\app
mkdir laser-wizard\resources\app\assets\images\icons
xcopy app\assets\images\icons laser-wizard\resources\app\assets\images\icons
cd laser-wizard
rmdir /q /s swiftshader
rmdir /q /s locales
del /f chrome_100_percent.pak
del /f chrome_200_percent.pak
del /f LICENSES.chromium.html
del /f LICENSE
del /f version
del /f snapshot_blob.bin
del /f icudtl.dat\f 
del /f d3dcompiler_47.dll
cmd /k