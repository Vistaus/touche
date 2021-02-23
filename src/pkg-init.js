/*
 * Copyright 2020 - 2021 José Expósito <jose.exposito89@gmail.com>
 *
 * This file is part of Touché.
 *
 * This program is free software: you can redistribute it and/or modify it under
 * the terms of the GNU General Public License as published by the Free Software
 * Foundation,  either version 3 of the License,  or (at your option)  any later
 * version.
 *
 * This program is distributed in the hope that it will be useful,  but  WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the  GNU General Public License along with
 * this program. If not, see <http://www.gnu.org/licenses/>.
 */
pkg.initGettext();
pkg.initFormat();

pkg.require({
  Gio: '2.0',
  Gtk: '3.0',
  Gdk: '3.0',
  Wnck: '3.0',
});

// Import Granite if it is available
try {
  const { Granite } = imports.gi;
  window.Granite = Granite;
} catch (error) {
  log('Granite is not available');
  window.Granite = null;
}