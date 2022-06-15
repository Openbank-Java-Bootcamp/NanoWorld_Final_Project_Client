import pandas as pd
from bokeh.plotting import ColumnDataSource, figure, output_file, show, save
from bokeh.io import export_png

output_file("Clusters-geo-predeterminada.html", title='Clusters con geometrias predeterminadas')
df = pd.read_csv("./csv-pto-comma.csv", delimiter=";", decimal=".")
#x=df['Cant'], y=df['Energy/atom'], desc=['Config'] 19
source = ColumnDataSource(data=dict(
    x=df['Cant'],
    y=df['Energy/atom'],
    desc=df['Config'],
    typ=df['Type'],
    energy=df['Energy/atom'],
    cant=df['Cant'],
    imgs=[
        './3-lineal.png',
        './3-triangular.png',
        './4-lineal.png',
        './4-cuadrado.png',
        './4-coronado.png',
        './4-rombo.png',
        './4-piramidal.png',
        './5-lineal.png',
        './5-alado.png',
        './5-cuadrado.png',
        './5-piramidal.png',
        './5-bipiramidal.png',
        './6-planar-33.png',
        './6-planar-24.png',
        './6-planar-15.png',
        './6-piramidal-15.png',
        './6-piramidal-24.png',
        './6-prisma.png',
        './6-bipiramidal.png',
         ]
))

TOOLTIPS = """
    <div>
        <div>
            <img
                src="@imgs" height="150" alt="@imgs" width="150"
                style="float: left; margin: 10px 5px 5px 10px;"
                border="2"
            ></img>
        </div>
        <div>
            <span style="font-size: 16px; font-weight: bold;">@cant</span>
            <span style="font-size: 16px; font-weight: bold;">@desc</span>
        </div>
        <div>
            <span style="font-size: 15px; color: font-weight: bold;">@typ</span>
        </div>
        <div>
            <span style="font-size: 15px;">(Energy</span>
            <span style="font-size: 18px; color:#696 font-weight: bold;">=$y eV)</span>
        </div>
    </div>
"""

p = figure(width=600, height=600, tooltips=TOOLTIPS,
           title="More info", x_axis_label=('N_atoms'), y_axis_label=('Energy[eV/atom]'))

p.circle('x', 'y', size=10, source=source, fill_color='gold')
show(p)
save(p,'./plot.html')
