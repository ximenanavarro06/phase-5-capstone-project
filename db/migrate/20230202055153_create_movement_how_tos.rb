class CreateMovementHowTos < ActiveRecord::Migration[7.0]
  def change
    create_table :movement_how_tos do |t|
      t.belongs_to :movement, null: false, foreign_key: true
      t.string :link

      t.timestamps
    end
  end
end
