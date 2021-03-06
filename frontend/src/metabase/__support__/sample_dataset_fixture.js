import Question from "metabase-lib/lib/Question";
import { getMetadata } from "metabase/selectors/metadata";
import { assocIn } from "icepick";
import _ from "underscore";

export const DATABASE_ID = 1;
export const ANOTHER_DATABASE_ID = 2;
export const MONGO_DATABASE_ID = 3;

export const ORDERS_TABLE_ID = 1;
export const PEOPLE_TABLE_ID = 2;
export const PRODUCT_TABLE_ID = 3;

export const ORDERS_TOTAL_FIELD_ID = 6;
export const PRODUCT_CATEGORY_FIELD_ID = 21;
export const ORDERS_CREATED_DATE_FIELD_ID = 1;
export const ORDERS_PK_FIELD_ID = 2;
export const ORDERS_PRODUCT_FK_FIELD_ID = 3;

export const MAIN_METRIC_ID = 1;

export const PRODUCT_PK_FIELD_ID = 24;
export const PRODUCT_TILE_FIELD_ID = 27;


export const state = {
  metadata: {
    metrics: {
      '1': {
        description: 'Because we want to know the total I ugess',
        table_id: 1,
        definition: {
          aggregation: [
            [
              'sum',
              [
                'field-id',
                6
              ]
            ]
          ],
          source_table: 1
        },
        creator: {
          email: 'sameer@metabase.com',
          first_name: 'Sameer',
          last_login: '2017-06-14T23:23:59.582Z',
          is_qbnewb: true,
          is_superuser: true,
          id: 1,
          last_name: 'Al-Sakran',
          date_joined: '2017-06-14T23:23:59.409Z',
          common_name: 'Sameer Al-Sakran'
        },
        database_id: 1,
        show_in_getting_started: false,
        name: 'Total Order Value',
        is_active: true,
        caveats: null,
        creator_id: 1,
        updated_at: '2017-06-14T23:32:12.266Z',
        id: 1,
        how_is_this_calculated: null,
        created_at: '2017-06-14T23:32:12.267Z',
        points_of_interest: null
      }
    },
    segments: {
      '1': {
        description: 'If it\'s more expensive it must be better',
        table_id: 1,
        definition: {
          filter: [
            '>',
            [
              'field-id',
              6
            ],
            30
          ],
          source_table: 1
        },
        creator: {
          email: 'sameer@metabase.com',
          first_name: 'Sameer',
          last_login: '2017-06-14T23:23:59.582Z',
          is_qbnewb: true,
          is_superuser: true,
          id: 1,
          last_name: 'Al-Sakran',
          date_joined: '2017-06-14T23:23:59.409Z',
          common_name: 'Sameer Al-Sakran'
        },
        show_in_getting_started: false,
        name: 'Expensive Things',
        is_active: true,
        caveats: null,
        creator_id: 1,
        updated_at: '2017-06-14T23:31:46.480Z',
        id: 1,
        created_at: '2017-06-14T23:31:46.480Z',
        points_of_interest: null
      }
    },
    databases: {
      '1': {
        description: null,
        features: [
          'basic-aggregations',
          'standard-deviation-aggregations',
          'expression-aggregations',
          'foreign-keys',
          'native-parameters',
          'expressions'
        ],
        name: 'Sample Dataset',
        caveats: null,
        tables: [
          1,
          2,
          3,
          4
        ],
        is_full_sync: true,
        updated_at: '2017-06-14T23:22:55.349Z',
        native_permissions: 'write',
        details: {
          db: 'zip:/private/tmp/metabase.jar!/sample-dataset.db;USER=GUEST;PASSWORD=guest'
        },
        is_sample: true,
        id: 1,
        engine: 'h2',
        created_at: '2017-06-14T23:22:55.349Z',
        points_of_interest: null
      }, 
       '2': {
        description: null,
        features: [
          'basic-aggregations',
          'standard-deviation-aggregations',
          'expression-aggregations',
          'foreign-keys',
          'native-parameters',
          'expressions'
        ],
        name: 'Sample Empty Dataset',
        caveats: null,
        tables: [],
        is_full_sync: true,
        updated_at: '2017-06-14T23:22:55.349Z',
        native_permissions: 'write',
        details: {
          db: 'zip:/private/tmp/metabase.jar!/sample-dataset.db;USER=GUEST;PASSWORD=guest'
        },
        is_sample: true,
        id: 2,
        engine: 'h2',
        created_at: '2017-06-14T23:22:55.349Z',
        points_of_interest: null
      },
      '3':{
          description: null,
          features: [
              "basic-aggregations",
              "nested-fields",
              "dynamic-schema"
          ],
          name: "test-data",
          caveats: null,
          tables: [],
          is_full_sync: true,
          updated_at: "2017-06-22T00:33:36.681Z",
          details: {
              dbname: "test-data",
              host: "localhost"
          },
          is_sample: false,
          id: 3,
          engine: "mongo",
          created_at: "2017-06-22T00:33:36.681Z",
          points_of_interest: null
      }
    },
    tables: {
      '1': {
        description: 'This is a confirmed order for a product from a user.',
        entity_type: null,
        schema: 'PUBLIC',
        raw_table_id: 2,
        show_in_getting_started: false,
        name: 'ORDERS',
        caveats: null,
        rows: 17624,
        updated_at: '2017-06-14T23:22:56.818Z',
        entity_name: null,
        active: true,
        id: 1,
        db_id: 1,
        visibility_type: null,
        display_name: 'Orders',
        created_at: '2017-06-14T23:22:55.758Z',
        points_of_interest: null,
        db: 1,
        fields: [
          1,
          2,
          3,
          4,
          5,
          6,
          7
        ],
        segments: [
          1
        ],
        field_values: {},
        metrics: [
          1
        ]
      },
      '2': {
        description: 'This is a user account. Note that employees and customer support staff will have accounts.',
        entity_type: null,
        schema: 'PUBLIC',
        raw_table_id: 3,
        show_in_getting_started: false,
        name: 'PEOPLE',
        caveats: null,
        rows: 2500,
        updated_at: '2017-06-14T23:22:57.664Z',
        entity_name: null,
        active: true,
        id: 2,
        db_id: 1,
        visibility_type: null,
        display_name: 'People',
        created_at: '2017-06-14T23:22:55.779Z',
        points_of_interest: null,
        db: 1,
        fields: [
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20
        ],
        segments: [],
        field_values: {
          '18': [
            'Affiliate',
            'Facebook',
            'Google',
            'Organic',
            'Twitter'
          ],
          '19': [
            'AA',
            'AE',
            'AK',
            'AL',
            'AP',
            'AR',
            'AS',
            'AZ',
            'CA',
            'CO',
            'CT',
            'DC',
            'DE',
            'FL',
            'FM',
            'GA',
            'GU',
            'HI',
            'IA',
            'ID',
            'IL',
            'IN',
            'KS',
            'KY',
            'LA',
            'MA',
            'MD',
            'ME',
            'MH',
            'MI',
            'MN',
            'MO',
            'MP',
            'MS',
            'MT',
            'NC',
            'ND',
            'NE',
            'NH',
            'NJ',
            'NM',
            'NV',
            'NY',
            'OH',
            'OK',
            'OR',
            'PA',
            'PR',
            'PW',
            'RI',
            'SC',
            'SD',
            'TN',
            'TX',
            'UT',
            'VA',
            'VI',
            'VT',
            'WA',
            'WI',
            'WV',
            'WY'
          ]
        },
        metrics: []
      },
      '3': {
        description: 'This is our product catalog. It includes all products ever sold by the Sample Company.',
        entity_type: null,
        schema: 'PUBLIC',
        raw_table_id: 1,
        show_in_getting_started: false,
        name: 'PRODUCTS',
        caveats: null,
        rows: 200,
        updated_at: '2017-06-14T23:22:57.756Z',
        entity_name: null,
        active: true,
        id: 3,
        db_id: 1,
        visibility_type: null,
        display_name: 'Products',
        created_at: '2017-06-14T23:22:55.809Z',
        points_of_interest: null,
        db: 1,
        fields: [
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28
        ],
        segments: [],
        field_values: {
          '21': [
            'Doohickey',
            'Gadget',
            'Gizmo',
            'Widget'
          ],

          '26': [
            0,
            1,
            1.6,
            2.2,
            2.7,
            2.8,
            3,
            3.1,
            3.2,
            3.3,
            3.4,
            3.5,
            3.6,
            3.7,
            3.8,
            3.9,
            4,
            4.1,
            4.2,
            4.3,
            4.4,
            4.5,
            4.6,
            4.7,
            5
          ]
        },
        metrics: []
      },
      '4': {
        description: 'These are reviews our customers have left on products. Note that these are not tied to orders so it is possible people have reviewed products they did not purchase from us.',
        entity_type: null,
        schema: 'PUBLIC',
        raw_table_id: 5,
        show_in_getting_started: false,
        name: 'REVIEWS',
        caveats: null,
        rows: 1078,
        updated_at: '2017-06-14T23:22:58.024Z',
        entity_name: null,
        active: true,
        id: 4,
        db_id: 1,
        visibility_type: null,
        display_name: 'Reviews',
        created_at: '2017-06-14T23:22:55.825Z',
        points_of_interest: null,
        fields: [
          29,
          30,
          31,
          32,
          33,
          34
        ],
        segments: [],
        metrics: []
      }
    },
    fields: {
      '1': {
        description: 'The date and time an order was submitted.',
        table_id: 1,
        special_type: null,
        name: 'CREATED_AT',
        caveats: null,
        fk_target_field_id: null,
        updated_at: '2017-06-14T23:22:55.766Z',
        active: true,
        parent_id: null,
        id: 1,
        raw_column_id: 9,
        last_analyzed: '2017-06-14T23:22:56.832Z',
        position: 0,
        visibility_type: 'normal',
        target: null,
        preview_display: true,
        display_name: 'Created At',
        created_at: '2017-06-14T23:22:55.766Z',
        base_type: 'type/DateTime',
        points_of_interest: null,
        values: []
      },
      '2': {
        description: 'This is a unique ID for the product. It is also called the “Invoice number” or “Confirmation number” in customer facing emails and screens.',
        table_id: 1,
        special_type: 'type/PK',
        name: 'ID',
        caveats: null,
        fk_target_field_id: null,
        updated_at: '2017-06-14T23:22:55.769Z',
        active: true,
        parent_id: null,
        id: 2,
        raw_column_id: 10,
        last_analyzed: '2017-06-14T23:22:56.832Z',
        position: 0,
        visibility_type: 'normal',
        target: null,
        preview_display: true,
        display_name: 'ID',
        created_at: '2017-06-14T23:22:55.769Z',
        base_type: 'type/BigInteger',
        points_of_interest: null,
        values: []
      },
      '3': {
        description: 'The product ID. This is an internal identifier for the product, NOT the SKU.',
        table_id: 1,
        special_type: 'type/FK',
        name: 'PRODUCT_ID',
        caveats: null,
        fk_target_field_id: 24,
        updated_at: '2017-06-14T23:22:55.838Z',
        active: true,
        parent_id: null,
        id: 3,
        raw_column_id: 11,
        last_analyzed: '2017-06-14T23:22:56.832Z',
        position: 0,
        visibility_type: 'normal',
        target: 24,
        preview_display: true,
        display_name: 'Product ID',
        created_at: '2017-06-14T23:22:55.770Z',
        base_type: 'type/Integer',
        points_of_interest: null,
        values: []
      },
      '4': {
        description: 'The raw, pre-tax cost of the order. Note that this might be different in the future from the product price due to promotions, credits, etc.',
        table_id: 1,
        special_type: 'type/Category',
        name: 'SUBTOTAL',
        caveats: null,
        fk_target_field_id: null,
        updated_at: '2017-06-14T23:22:56.822Z',
        active: true,
        parent_id: null,
        id: 4,
        raw_column_id: 12,
        last_analyzed: '2017-06-14T23:22:56.832Z',
        position: 0,
        visibility_type: 'normal',
        target: null,
        preview_display: true,
        display_name: 'Subtotal',
        created_at: '2017-06-14T23:22:55.772Z',
        base_type: 'type/Float',
        points_of_interest: null,
        values: {
          id: 1,
          created_at: '2017-06-14T23:22:56.827Z',
          updated_at: '2017-06-14T23:22:56.827Z',
          values: [],
          human_readable_values: {},
          field_id: 4
        }
      },
      '5': {
        description: 'This is the amount of local and federal taxes that are collected on the purchase. Note that other governmental fees on some products are not included here, but instead are accounted for in the subtotal.',
        table_id: 1,
        special_type: null,
        name: 'TAX',
        caveats: null,
        fk_target_field_id: null,
        updated_at: '2017-06-14T23:22:55.774Z',
        active: true,
        parent_id: null,
        id: 5,
        raw_column_id: 13,
        last_analyzed: '2017-06-14T23:22:56.832Z',
        position: 0,
        visibility_type: 'normal',
        target: null,
        preview_display: true,
        display_name: 'Tax',
        created_at: '2017-06-14T23:22:55.774Z',
        base_type: 'type/Float',
        points_of_interest: null,
        values: []
      },
      '6': {
        description: 'The total billed amount.',
        table_id: 1,
        special_type: null,
        name: 'TOTAL',
        caveats: null,
        fk_target_field_id: null,
        updated_at: '2017-06-14T23:22:55.775Z',
        active: true,
        parent_id: null,
        id: 6,
        raw_column_id: 14,
        last_analyzed: '2017-06-14T23:22:56.832Z',
        position: 0,
        visibility_type: 'normal',
        target: null,
        preview_display: true,
        display_name: 'Total',
        created_at: '2017-06-14T23:22:55.775Z',
        base_type: 'type/Float',
        points_of_interest: null,
        values: []
      },
      '7': {
        description: 'The id of the user who made this order. Note that in some cases where an order was created on behalf of a customer who phoned the order in, this might be the employee who handled the request.',
        table_id: 1,
        special_type: 'type/FK',
        name: 'USER_ID',
        caveats: null,
        fk_target_field_id: 13,
        updated_at: '2017-06-14T23:22:55.839Z',
        active: true,
        parent_id: null,
        id: 7,
        raw_column_id: 15,
        last_analyzed: '2017-06-14T23:22:56.832Z',
        position: 0,
        visibility_type: 'normal',
        target: 13,
        preview_display: true,
        display_name: 'User ID',
        created_at: '2017-06-14T23:22:55.777Z',
        base_type: 'type/Integer',
        points_of_interest: null,
        values: []
      },
      '8': {
        description: 'The street address of the account’s billing address',
        table_id: 2,
        special_type: null,
        name: 'ADDRESS',
        caveats: null,
        fk_target_field_id: null,
        updated_at: '2017-06-14T23:22:55.785Z',
        active: true,
        parent_id: null,
        id: 8,
        raw_column_id: 16,
        last_analyzed: '2017-06-14T23:22:57.670Z',
        position: 0,
        visibility_type: 'normal',
        target: null,
        preview_display: true,
        display_name: 'Address',
        created_at: '2017-06-14T23:22:55.785Z',
        base_type: 'type/Text',
        points_of_interest: null,
        values: []
      },
      '9': {
        description: 'The date of birth of the user',
        table_id: 2,
        special_type: null,
        name: 'BIRTH_DATE',
        caveats: null,
        fk_target_field_id: null,
        updated_at: '2017-06-14T23:22:55.787Z',
        active: true,
        parent_id: null,
        id: 9,
        raw_column_id: 17,
        last_analyzed: '2017-06-14T23:22:57.670Z',
        position: 0,
        visibility_type: 'normal',
        target: null,
        preview_display: true,
        display_name: 'Birth Date',
        created_at: '2017-06-14T23:22:55.787Z',
        base_type: 'type/Date',
        points_of_interest: null,
        values: []
      },
      '10': {
        description: 'The city of the account’s billing address',
        table_id: 2,
        special_type: 'type/City',
        name: 'CITY',
        caveats: null,
        fk_target_field_id: null,
        updated_at: '2017-06-14T23:22:55.788Z',
        active: true,
        parent_id: null,
        id: 10,
        raw_column_id: 18,
        last_analyzed: '2017-06-14T23:22:57.670Z',
        position: 0,
        visibility_type: 'normal',
        target: null,
        preview_display: true,
        display_name: 'City',
        created_at: '2017-06-14T23:22:55.789Z',
        base_type: 'type/Text',
        points_of_interest: null,
        values: []
      },
      '11': {
        description: 'The date the user record was created. Also referred to as the user’s "join date"',
        table_id: 2,
        special_type: null,
        name: 'CREATED_AT',
        caveats: null,
        fk_target_field_id: null,
        updated_at: '2017-06-14T23:22:55.791Z',
        active: true,
        parent_id: null,
        id: 11,
        raw_column_id: 19,
        last_analyzed: '2017-06-14T23:22:57.670Z',
        position: 0,
        visibility_type: 'normal',
        target: null,
        preview_display: true,
        display_name: 'Created At',
        created_at: '2017-06-14T23:22:55.791Z',
        base_type: 'type/DateTime',
        points_of_interest: null,
        values: []
      },
      '12': {
        description: 'The contact email for the account.',
        table_id: 2,
        special_type: 'type/Email',
        name: 'EMAIL',
        caveats: null,
        fk_target_field_id: null,
        updated_at: '2017-06-14T23:22:57.666Z',
        active: true,
        parent_id: null,
        id: 12,
        raw_column_id: 20,
        last_analyzed: '2017-06-14T23:22:57.670Z',
        position: 0,
        visibility_type: 'normal',
        target: null,
        preview_display: true,
        display_name: 'Email',
        created_at: '2017-06-14T23:22:55.793Z',
        base_type: 'type/Text',
        points_of_interest: null,
        values: []
      },
      '13': {
        description: 'A unique identifier given to each user.',
        table_id: 2,
        special_type: 'type/PK',
        name: 'ID',
        caveats: null,
        fk_target_field_id: null,
        updated_at: '2017-06-14T23:22:55.795Z',
        active: true,
        parent_id: null,
        id: 13,
        raw_column_id: 21,
        last_analyzed: '2017-06-14T23:22:57.670Z',
        position: 0,
        visibility_type: 'normal',
        preview_display: true,
        display_name: 'ID',
        created_at: '2017-06-14T23:22:55.795Z',
        base_type: 'type/BigInteger',
        points_of_interest: null,
        target: null,
        values: []
      },
      '14': {
        description: 'This is the latitude of the user on sign-up. It might be updated in the future to the last seen location.',
        table_id: 2,
        special_type: 'type/Latitude',
        name: 'LATITUDE',
        caveats: null,
        fk_target_field_id: null,
        updated_at: '2017-06-14T23:22:55.797Z',
        active: true,
        parent_id: null,
        id: 14,
        raw_column_id: 22,
        last_analyzed: '2017-06-14T23:22:57.670Z',
        position: 0,
        visibility_type: 'normal',
        target: null,
        preview_display: true,
        display_name: 'Latitude',
        created_at: '2017-06-14T23:22:55.797Z',
        base_type: 'type/Float',
        points_of_interest: null,
        values: []
      },
      '15': {
        description: 'This is the longitude of the user on sign-up. It might be updated in the future to the last seen location.',
        table_id: 2,
        special_type: 'type/Longitude',
        name: 'LONGITUDE',
        caveats: null,
        fk_target_field_id: null,
        updated_at: '2017-06-14T23:22:55.798Z',
        active: true,
        parent_id: null,
        id: 15,
        raw_column_id: 23,
        last_analyzed: '2017-06-14T23:22:57.670Z',
        position: 0,
        visibility_type: 'normal',
        target: null,
        preview_display: true,
        display_name: 'Longitude',
        created_at: '2017-06-14T23:22:55.798Z',
        base_type: 'type/Float',
        points_of_interest: null,
        values: []
      },
      '16': {
        description: 'The name of the user who owns an account',
        table_id: 2,
        special_type: 'type/Name',
        name: 'NAME',
        caveats: null,
        fk_target_field_id: null,
        updated_at: '2017-06-14T23:22:55.800Z',
        active: true,
        parent_id: null,
        id: 16,
        raw_column_id: 24,
        last_analyzed: '2017-06-14T23:22:57.670Z',
        position: 0,
        visibility_type: 'normal',
        target: null,
        preview_display: true,
        display_name: 'Name',
        created_at: '2017-06-14T23:22:55.800Z',
        base_type: 'type/Text',
        points_of_interest: null,
        values: []
      },
      '17': {
        description: 'This is the salted password of the user. It should not be visible',
        table_id: 2,
        special_type: null,
        name: 'PASSWORD',
        caveats: null,
        fk_target_field_id: null,
        updated_at: '2017-06-14T23:22:55.802Z',
        active: true,
        parent_id: null,
        id: 17,
        raw_column_id: 25,
        last_analyzed: '2017-06-14T23:22:57.670Z',
        position: 0,
        visibility_type: 'normal',
        target: null,
        preview_display: true,
        display_name: 'Password',
        created_at: '2017-06-14T23:22:55.802Z',
        base_type: 'type/Text',
        points_of_interest: null,
        values: []
      },
      '18': {
        description: 'The channel through which we acquired this user. Valid values include: Affiliate, Facebook, Google, Organic and Twitter',
        table_id: 2,
        special_type: 'type/Category',
        name: 'SOURCE',
        caveats: null,
        fk_target_field_id: null,
        updated_at: '2017-06-14T23:22:57.667Z',
        active: true,
        parent_id: null,
        id: 18,
        raw_column_id: 26,
        last_analyzed: '2017-06-14T23:22:57.670Z',
        position: 0,
        visibility_type: 'normal',
        target: null,
        preview_display: true,
        display_name: 'Source',
        created_at: '2017-06-14T23:22:55.803Z',
        base_type: 'type/Text',
        points_of_interest: null,
        values: {
          id: 2,
          created_at: '2017-06-14T23:22:57.668Z',
          updated_at: '2017-06-14T23:22:57.668Z',
          values: [
            'Affiliate',
            'Facebook',
            'Google',
            'Organic',
            'Twitter'
          ],
          human_readable_values: {},
          field_id: 18
        }
      },
      '19': {
        description: 'The state or province of the account’s billing address',
        table_id: 2,
        special_type: 'type/State',
        name: 'STATE',
        caveats: null,
        fk_target_field_id: null,
        updated_at: '2017-06-14T23:22:55.805Z',
        active: true,
        parent_id: null,
        id: 19,
        raw_column_id: 27,
        last_analyzed: '2017-06-14T23:22:57.670Z',
        position: 0,
        visibility_type: 'normal',
        target: null,
        preview_display: true,
        display_name: 'State',
        created_at: '2017-06-14T23:22:55.805Z',
        base_type: 'type/Text',
        points_of_interest: null,
        values: {
          id: 3,
          created_at: '2017-06-14T23:22:57.669Z',
          updated_at: '2017-06-14T23:22:57.669Z',
          values: [
            'AA',
            'AE',
            'AK',
            'AL',
            'AP',
            'AR',
            'AS',
            'AZ',
            'CA',
            'CO',
            'CT',
            'DC',
            'DE',
            'FL',
            'FM',
            'GA',
            'GU',
            'HI',
            'IA',
            'ID',
            'IL',
            'IN',
            'KS',
            'KY',
            'LA',
            'MA',
            'MD',
            'ME',
            'MH',
            'MI',
            'MN',
            'MO',
            'MP',
            'MS',
            'MT',
            'NC',
            'ND',
            'NE',
            'NH',
            'NJ',
            'NM',
            'NV',
            'NY',
            'OH',
            'OK',
            'OR',
            'PA',
            'PR',
            'PW',
            'RI',
            'SC',
            'SD',
            'TN',
            'TX',
            'UT',
            'VA',
            'VI',
            'VT',
            'WA',
            'WI',
            'WV',
            'WY'
          ],
          human_readable_values: {},
          field_id: 19
        }
      },
      '20': {
        description: 'The postal code of the account’s billing address',
        table_id: 2,
        special_type: 'type/ZipCode',
        name: 'ZIP',
        caveats: null,
        fk_target_field_id: null,
        updated_at: '2017-06-14T23:22:55.807Z',
        active: true,
        parent_id: null,
        id: 20,
        raw_column_id: 28,
        last_analyzed: '2017-06-14T23:22:57.670Z',
        position: 0,
        visibility_type: 'normal',
        target: null,
        preview_display: true,
        display_name: 'Zip',
        created_at: '2017-06-14T23:22:55.807Z',
        base_type: 'type/Text',
        points_of_interest: null,
        values: []
      },
      '21': {
        description: 'The type of product, valid values include: Doohicky, Gadget, Gizmo and Widget',
        table_id: 3,
        special_type: 'type/Category',
        name: 'CATEGORY',
        caveats: null,
        fk_target_field_id: null,
        updated_at: '2017-06-14T23:22:57.757Z',
        active: true,
        parent_id: null,
        id: 21,
        raw_column_id: 1,
        last_analyzed: '2017-06-14T23:22:57.771Z',
        position: 0,
        visibility_type: 'normal',
        target: null,
        preview_display: true,
        display_name: 'Category',
        created_at: '2017-06-14T23:22:55.813Z',
        base_type: 'type/Text',
        points_of_interest: null,
        values: {
          id: 4,
          created_at: '2017-06-14T23:22:57.758Z',
          updated_at: '2017-06-14T23:22:57.758Z',
          values: [
            'Doohickey',
            'Gadget',
            'Gizmo',
            'Widget'
          ],
          human_readable_values: {},
          field_id: 21
        }
      },
      '22': {
        description: 'The date the product was added to our catalog.',
        table_id: 3,
        special_type: null,
        name: 'CREATED_AT',
        caveats: null,
        fk_target_field_id: null,
        updated_at: '2017-06-14T23:22:55.814Z',
        active: true,
        parent_id: null,
        id: 22,
        raw_column_id: 2,
        last_analyzed: '2017-06-14T23:22:57.771Z',
        position: 0,
        visibility_type: 'normal',
        target: null,
        preview_display: true,
        display_name: 'Created At',
        created_at: '2017-06-14T23:22:55.814Z',
        base_type: 'type/DateTime',
        points_of_interest: null,
        values: []
      },
      '23': {
        description: 'The international article number. A 13 digit number uniquely identifying the product.',
        table_id: 3,
        special_type: 'type/Category',
        name: 'EAN',
        caveats: null,
        fk_target_field_id: null,
        updated_at: '2017-06-14T23:22:57.759Z',
        active: true,
        parent_id: null,
        id: 23,
        raw_column_id: 3,
        last_analyzed: '2017-06-14T23:22:57.771Z',
        position: 0,
        visibility_type: 'normal',
        target: null,
        preview_display: true,
        display_name: 'Ean',
        created_at: '2017-06-14T23:22:55.816Z',
        base_type: 'type/Text',
        points_of_interest: null,
        values: {
          id: 5,
          created_at: '2017-06-14T23:22:57.760Z',
          updated_at: '2017-06-14T23:22:57.760Z',
          values: [],
          human_readable_values: {},
          field_id: 23
        }
      },
      '24': {
        description: 'The numerical product number. Only used internally. All external communication should use the title or EAN.',
        table_id: 3,
        special_type: 'type/PK',
        name: 'ID',
        caveats: null,
        fk_target_field_id: null,
        updated_at: '2017-06-14T23:22:55.817Z',
        active: true,
        parent_id: null,
        id: 24,
        raw_column_id: 4,
        last_analyzed: '2017-06-14T23:22:57.771Z',
        position: 0,
        visibility_type: 'normal',
        preview_display: true,
        display_name: 'ID',
        created_at: '2017-06-14T23:22:55.817Z',
        base_type: 'type/BigInteger',
        points_of_interest: null,
        target: null,
        values: []
      },
      '25': {
        description: 'The list price of the product. Note that this is not always the price the product sold for due to discounts, promotions, etc.',
        table_id: 3,
        special_type: 'type/Category',
        name: 'PRICE',
        caveats: null,
        fk_target_field_id: null,
        updated_at: '2017-06-14T23:22:57.762Z',
        active: true,
        parent_id: null,
        id: 25,
        raw_column_id: 5,
        last_analyzed: '2017-06-14T23:22:57.771Z',
        position: 0,
        visibility_type: 'normal',
        target: null,
        preview_display: true,
        display_name: 'Price',
        created_at: '2017-06-14T23:22:55.818Z',
        base_type: 'type/Float',
        points_of_interest: null,
        values: {
          id: 6,
          created_at: '2017-06-14T23:22:57.764Z',
          updated_at: '2017-06-14T23:22:57.764Z',
          values: [],
          human_readable_values: {},
          field_id: 25
        }
      },
      '26': {
        description: 'The average rating users have given the product. This ranges from 1 - 5',
        table_id: 3,
        special_type: 'type/Category',
        name: 'RATING',
        caveats: null,
        fk_target_field_id: null,
        updated_at: '2017-06-14T23:22:57.765Z',
        active: true,
        parent_id: null,
        id: 26,
        raw_column_id: 6,
        last_analyzed: '2017-06-14T23:22:57.771Z',
        position: 0,
        visibility_type: 'normal',
        target: null,
        preview_display: true,
        display_name: 'Rating',
        created_at: '2017-06-14T23:22:55.820Z',
        base_type: 'type/Float',
        points_of_interest: null,
        values: {
          id: 7,
          created_at: '2017-06-14T23:22:57.765Z',
          updated_at: '2017-06-14T23:22:57.765Z',
          values: [
            0,
            1,
            1.6,
            2.2,
            2.7,
            2.8,
            3,
            3.1,
            3.2,
            3.3,
            3.4,
            3.5,
            3.6,
            3.7,
            3.8,
            3.9,
            4,
            4.1,
            4.2,
            4.3,
            4.4,
            4.5,
            4.6,
            4.7,
            5
          ],
          human_readable_values: {},
          field_id: 26
        }
      },
      '27': {
        description: 'The name of the product as it should be displayed to customers.',
        table_id: 3,
        special_type: 'type/Category',
        name: 'TITLE',
        caveats: null,
        fk_target_field_id: null,
        updated_at: '2017-06-14T23:22:57.766Z',
        active: true,
        parent_id: null,
        id: 27,
        raw_column_id: 7,
        last_analyzed: '2017-06-14T23:22:57.771Z',
        position: 0,
        visibility_type: 'normal',
        target: null,
        preview_display: true,
        display_name: 'Title',
        created_at: '2017-06-14T23:22:55.821Z',
        base_type: 'type/Text',
        points_of_interest: null,
        values: {
          id: 8,
          created_at: '2017-06-14T23:22:57.767Z',
          updated_at: '2017-06-14T23:22:57.767Z',
          values: [],
          human_readable_values: {},
          field_id: 27
        }
      },
      '28': {
        description: 'The source of the product.',
        table_id: 3,
        special_type: 'type/Category',
        name: 'VENDOR',
        caveats: null,
        fk_target_field_id: null,
        updated_at: '2017-06-14T23:22:57.768Z',
        active: true,
        parent_id: null,
        id: 28,
        raw_column_id: 8,
        last_analyzed: '2017-06-14T23:22:57.771Z',
        position: 0,
        visibility_type: 'normal',
        target: null,
        preview_display: true,
        display_name: 'Vendor',
        created_at: '2017-06-14T23:22:55.823Z',
        base_type: 'type/Text',
        points_of_interest: null,
        values: {
          id: 9,
          created_at: '2017-06-14T23:22:57.769Z',
          updated_at: '2017-06-14T23:22:57.769Z',
          values: [],
          human_readable_values: {},
          field_id: 28
        }
      },
      '29': {
        description: 'The review the user left. Limited to 2000 characters.',
        table_id: 4,
        special_type: 'type/Description',
        name: 'BODY',
        caveats: null,
        fk_target_field_id: null,
        updated_at: '2017-06-14T23:22:55.828Z',
        active: true,
        parent_id: null,
        id: 29,
        values: [],
        raw_column_id: 31,
        last_analyzed: '2017-06-14T23:22:58.030Z',
        position: 0,
        visibility_type: 'normal',
        target: null,
        preview_display: true,
        display_name: 'Body',
        created_at: '2017-06-14T23:22:55.828Z',
        base_type: 'type/Text',
        points_of_interest: null
      },
      '30': {
        description: 'The day and time a review was written by a user.',
        table_id: 4,
        special_type: null,
        name: 'CREATED_AT',
        caveats: null,
        fk_target_field_id: null,
        updated_at: '2017-06-14T23:22:55.830Z',
        active: true,
        parent_id: null,
        id: 30,
        values: [],
        raw_column_id: 32,
        last_analyzed: '2017-06-14T23:22:58.030Z',
        position: 0,
        visibility_type: 'normal',
        target: null,
        preview_display: true,
        display_name: 'Created At',
        created_at: '2017-06-14T23:22:55.830Z',
        base_type: 'type/DateTime',
        points_of_interest: null
      },
      '31': {
        description: 'A unique internal identifier for the review. Should not be used externally.',
        table_id: 4,
        special_type: 'type/PK',
        name: 'ID',
        caveats: null,
        fk_target_field_id: null,
        updated_at: '2017-06-14T23:22:55.831Z',
        active: true,
        parent_id: null,
        id: 31,
        values: [],
        raw_column_id: 33,
        last_analyzed: '2017-06-14T23:22:58.030Z',
        position: 0,
        visibility_type: 'normal',
        target: null,
        preview_display: true,
        display_name: 'ID',
        created_at: '2017-06-14T23:22:55.831Z',
        base_type: 'type/BigInteger',
        points_of_interest: null
      },
      '32': {
        description: 'The product the review was for',
        table_id: 4,
        special_type: 'type/FK',
        name: 'PRODUCT_ID',
        caveats: null,
        fk_target_field_id: 24,
        updated_at: '2017-06-14T23:22:55.840Z',
        active: true,
        parent_id: null,
        id: 32,
        values: [],
        raw_column_id: 34,
        last_analyzed: '2017-06-14T23:22:58.030Z',
        position: 0,
        visibility_type: 'normal',
        target: 24,
        preview_display: true,
        display_name: 'Product ID',
        created_at: '2017-06-14T23:22:55.832Z',
        base_type: 'type/Integer',
        points_of_interest: null
      },
      '33': {
        description: 'The rating (on a scale of 1-5) the user left.',
        table_id: 4,
        special_type: 'type/Category',
        name: 'RATING',
        caveats: null,
        fk_target_field_id: null,
        updated_at: '2017-06-14T23:22:55.834Z',
        active: true,
        parent_id: null,
        id: 33,
        values: {
          id: 10,
          created_at: '2017-06-14T23:22:58.028Z',
          updated_at: '2017-06-14T23:22:58.028Z',
          values: [
            1,
            2,
            3,
            4,
            5
          ],
          human_readable_values: {},
          field_id: 33
        },
        raw_column_id: 35,
        last_analyzed: '2017-06-14T23:22:58.030Z',
        position: 0,
        visibility_type: 'normal',
        target: null,
        preview_display: true,
        display_name: 'Rating',
        created_at: '2017-06-14T23:22:55.834Z',
        base_type: 'type/Integer',
        points_of_interest: null
      },
      '34': {
        description: 'The user who left the review',
        table_id: 4,
        special_type: null,
        name: 'REVIEWER',
        caveats: null,
        fk_target_field_id: null,
        updated_at: '2017-06-14T23:22:55.835Z',
        active: true,
        parent_id: null,
        id: 34,
        values: [],
        raw_column_id: 36,
        last_analyzed: '2017-06-14T23:22:58.030Z',
        position: 0,
        visibility_type: 'normal',
        target: null,
        preview_display: true,
        display_name: 'Reviewer',
        created_at: '2017-06-14T23:22:55.835Z',
        base_type: 'type/Text',
        points_of_interest: null
      }
    },
    revisions: {},
    databasesList: [
      1
    ]
  },
}

export const metadata = getMetadata(state);

export const card = {
    display: 'table',
    visualization_settings: {},
    dataset_query: {
        type: "query",
        database: DATABASE_ID,
        query: {
            source_table: ORDERS_TABLE_ID
        }
    }
};

export const product_card = {
    display: 'table',
    visualization_settings: {},
    dataset_query: {
        type: "query",
        database: DATABASE_ID,
        query: {
            source_table: PRODUCT_TABLE_ID
        }
    }
};

export const orders_raw_card = {
    id: 1,
    name: "Raw orders data",
    display: 'table',
    visualization_settings: {},
    can_write: true,
    dataset_query: {
        type: "query",
        database: DATABASE_ID,
        query: {
            source_table: ORDERS_TABLE_ID
        }
    }
};

export const orders_count_card = {
    id: 2,
    name: "# orders data",
    display: 'table',
    visualization_settings: {},
    dataset_query: {
        type: "query",
        database: DATABASE_ID,
        query: {
            aggregation: [["count"]],
            source_table: ORDERS_TABLE_ID
        }
    }
};

export const native_orders_count_card = {
    id: 3,
    name: "# orders data",
    display: 'table',
    visualization_settings: {},
    dataset_query: {
        type: "native",
        database: DATABASE_ID,
        native: {
            query: "SELECT count(*) FROM orders"
        }
    }
};

export const unsaved_native_orders_count_card = {
    name: "# orders data",
    display: 'table',
    visualization_settings: {},
    dataset_query: {
        type: "native",
        database: DATABASE_ID,
        native: {
            query: "SELECT count(*) FROM orders"
        }
    }
};

export const invalid_orders_count_card = {
    id: 2,
    name: "# orders data",
    display: 'table',
    visualization_settings: {},
    dataset_query: {
        type: "nosuchqueryprocessor",
        database: DATABASE_ID,
        query: {
            query: "SELECT count(*) FROM orders"
        }
    }
};

export const orders_count_by_id_card = {
    id: 2,
    name: "# orders data",
    can_write: false,
    display: 'table',
    visualization_settings: {},
    dataset_query: {
        type: "query",
        database: DATABASE_ID,
        query: {
            aggregation: [["count"]],
            source_table: ORDERS_TABLE_ID,
            breakout: [["field-id", ORDERS_PK_FIELD_ID]]
        }
    }
};

export const clickedFloatHeader = {
    column: {
        ...metadata.fields[ORDERS_TOTAL_FIELD_ID],
        source: "fields"
    }
};

export const clickedCategoryHeader = {
    column: {
        ...metadata.fields[PRODUCT_CATEGORY_FIELD_ID],
        source: "fields"
    }
};

export const clickedFloatValue = {
    column: {
        ...metadata.fields[ORDERS_TOTAL_FIELD_ID],
        source: "fields"
    },
    value: 1234
};

export const clickedPKValue = {
    column: {
        ...metadata.fields[ORDERS_PK_FIELD_ID],
        source: "fields"
    },
    value: 42
};

export const clickedFKValue = {
    column: {
        ...metadata.fields[ORDERS_PRODUCT_FK_FIELD_ID],
        source: "fields"
    },
    value: 43
};

export const tableMetadata = metadata.tables[ORDERS_TABLE_ID];

export function makeQuestion(fn = (card, state) => ({ card, state })) {
    const result = fn(card, state);
    return new Question(getMetadata(result.state), result.card);
}

export const question = new Question(metadata, card);
export const unsavedOrderCountQuestion = new Question(metadata, _.omit(orders_count_card, 'id'));
export const productQuestion = new Question(metadata, product_card);
const NoFieldsMetadata = getMetadata(assocIn(state, ["metadata", "tables", ORDERS_TABLE_ID, "fields"], []))
export const questionNoFields = new Question(NoFieldsMetadata, card);

export const orders_past_30_days_segment = {
    "id": null,
    "name": "Past 30 days",
    "description": "Past 30 days created at",
    "table_id": 1,
    "definition": {
        "source_table": 1,
        "filter": ["time-interval", ["field-id", 1], -30, "day"]
    }
};

export const vendor_count_metric = {
    "id": null,
    "name": "Vendor count",
    "description": "Tells how many vendors we have",
    "table_id": 3,
    "definition": {
        "aggregation": [
            [
                "distinct",
                [
                    "field-id",
                    28
                ]
            ]
        ],
        "source_table": 3
    }
};
